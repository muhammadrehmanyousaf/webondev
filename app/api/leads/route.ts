import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { processContactSubmission, processBookingSubmission } from '@/lib/email';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function POST(request: NextRequest) {
  try {
    // Check DATABASE_URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      console.error('DATABASE_URL is not set');
      return NextResponse.json(
        { success: false, message: 'Database configuration error' },
        { status: 500 }
      );
    }

    // Log database connection attempt
    console.log('Attempting to connect to database...');
    
    // Ensure DB connection exists at runtime
    try {
      // Test database connection
      await pool.query('SELECT NOW()');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      );
    }

    console.log('Successfully connected to database');

    // Parse request body
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      formType,
      preferredDate,
      preferredTime,
      timezone,
      meetingType
    } = body;

    // First check if the leads table exists
    try {
      const tableCheck = await pool.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'leads'
        );
      `);
      
      if (!tableCheck.rows[0]?.exists) {
        console.log('Creating leads table...');
        await pool.query(`
          CREATE TABLE IF NOT EXISTS leads (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            company VARCHAR(255),
            service VARCHAR(255),
            budget VARCHAR(100),
            timeline VARCHAR(100),
            message TEXT,
            form_type VARCHAR(50) NOT NULL,
            preferred_date DATE,
            preferred_time VARCHAR(50),
            timezone VARCHAR(50),
            meeting_type VARCHAR(100),
            status VARCHAR(50) DEFAULT 'new',
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `);
        console.log('Leads table created successfully');
      }
    } catch (tableError) {
      console.error('Error checking/creating table:', tableError);
      return NextResponse.json(
        { success: false, message: 'Database table setup failed' },
        { status: 500 }
      );
    }

    // Insert the lead into the database
    console.log('Attempting to insert lead...');
    const result = await pool.query(`
      INSERT INTO leads (
        name, email, phone, company, service, budget, timeline, message, 
        form_type, preferred_date, preferred_time, timezone, meeting_type
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
      ) RETURNING id
    `, [name, email, phone, company, service, budget, timeline, message, 
        formType, preferredDate, preferredTime, timezone, meetingType]);

    // Send emails based on form type
    let emailResult = { userEmail: { success: false }, teamEmail: { success: false } };

    try {
      if (formType === 'booking' && preferredDate && preferredTime) {
        // Format date for email
        const dateObj = new Date(preferredDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        emailResult = await processBookingSubmission({
          name,
          email,
          phone,
          service: service || meetingType || 'Consultation',
          date: formattedDate,
          time: preferredTime,
          timezone: timezone || 'PST',
          notes: message,
        });
      } else {
        // Contact form submission
        emailResult = await processContactSubmission({
          name,
          email,
          phone,
          company,
          service,
          budget,
          timeline,
          message,
          source: formType === 'quote' ? 'Quote Request' : 'Contact Form',
        });
      }

      console.log('Email sending result:', emailResult);
    } catch (emailError) {
      // Log email error but don't fail the request - lead is already saved
      console.error('Error sending emails:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      id: result.rows[0]?.id,
      emailSent: emailResult.userEmail.success && emailResult.teamEmail.success
    });

  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Fetch all leads
    const result = await pool.query(`
      SELECT * FROM leads
      ORDER BY created_at DESC
    `);
    const leads = result.rows;

    return NextResponse.json({
      success: true,
      leads
    });

  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
} 