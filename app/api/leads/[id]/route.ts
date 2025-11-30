import { NextRequest, NextResponse } from 'next/server';
import { sql, getSql } from '@/lib/db';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    getSql();
    const body = await request.json();
    const { status, notes } = body;

    // Update the lead status
    await sql`
      UPDATE leads
      SET status = ${status}, notes = ${notes}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;

    return NextResponse.json({ 
      success: true, 
      message: 'Lead updated successfully' 
    });

  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update lead' },
      { status: 500 }
    );
  }
} 