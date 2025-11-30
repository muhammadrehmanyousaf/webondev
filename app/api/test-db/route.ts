import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function POST() {
  try {
    // Test database connection
    const client = await pool.connect();
    
    try {
      // Try a simple query
      const result = await client.query('SELECT NOW()');
      console.log('Database connection successful!', result.rows[0]);
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Database connection successful',
        timestamp: result.rows[0]
      }));
    } finally {
      // Always release the client back to the pool
      client.release();
    }
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), { status: 500 });
  }
}