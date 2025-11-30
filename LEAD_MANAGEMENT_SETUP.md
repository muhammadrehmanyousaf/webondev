# Lead Management System Setup

This guide will help you set up the lead management system using Neon PostgreSQL.

## Prerequisites

1. A Neon PostgreSQL database account
2. Your Neon database connection string

## Setup Steps

### 1. Create Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy your database connection string

### 2. Set Environment Variables

Create a `.env.local` file in your project root and add:

```env
DATABASE_URL=your_neon_connection_string_here
```

### 3. Set Up Database Schema

1. Connect to your Neon database using their SQL editor or any PostgreSQL client
2. Run the SQL commands from `database-setup.sql`:

```sql
-- Copy and paste the contents of database-setup.sql
```

### 4. Install Dependencies

The required packages are already installed:
- `@neondatabase/serverless`
- `pg`

### 5. Test the System

1. Start your development server: `npm run dev`
2. Visit `/leads` in your browser
3. Enter the password: `main@A123`
4. You should see the lead management dashboard

## Features

### Lead Management Dashboard (`/leads`)
- **Password Protection**: Simple password authentication
- **View All Leads**: See all form submissions in one place
- **Status Management**: Update lead status (new, contacted, qualified, converted, lost)
- **Notes**: Add notes for each lead
- **Form Type Filtering**: Distinguish between contact, booking, and newsletter submissions
- **Real-time Updates**: Status changes are saved immediately

### Form Integration
- **Contact Form**: Now saves to database instead of Formspree
- **Booking Form**: Stores meeting requests with all details
- **Newsletter Form**: Tracks newsletter subscriptions

### Lead Statuses
- **New**: Just submitted
- **Contacted**: Initial contact made
- **Qualified**: Lead is interested and qualified
- **Converted**: Lead became a customer
- **Lost**: Lead is no longer interested

## Security Notes

- The current implementation uses a simple password check
- For production, consider implementing proper authentication
- The password is hardcoded as `main@A123` - change this in the API routes

## API Endpoints

- `POST /api/leads` - Submit a new lead
- `GET /api/leads?password=xxx` - Fetch all leads (requires password)
- `PATCH /api/leads/[id]?password=xxx` - Update lead status (requires password)

## Database Schema

The `leads` table includes:
- Basic contact info (name, email, phone, company)
- Project details (service, budget, timeline)
- Form metadata (form_type, status, timestamps)
- Meeting details (for booking forms)
- Notes field for internal comments

## Troubleshooting

1. **Database Connection Error**: Check your `DATABASE_URL` environment variable
2. **Authentication Failed**: Verify the password is correct
3. **Forms Not Working**: Check browser console for API errors
4. **No Leads Showing**: Ensure the database table was created correctly

## Next Steps

Consider adding these features in the future:
- Email notifications for new leads
- Lead export functionality
- Advanced filtering and search
- User management for multiple team members
- Integration with CRM systems 