import { neon } from '@neondatabase/serverless';

// Initialize lazily to avoid build-time failures when DATABASE_URL is not set
let _sql: ReturnType<typeof neon> | null = null;

export function getSql() {
  if (_sql) return _sql;
  
  try {
    const url = process.env.DATABASE_URL;
    if (!url) {
      console.error('Database URL is not set in environment variables');
      throw new Error('DATABASE_URL is not set');
    }

    console.log('Attempting to connect with URL:', url.replace(/:[^:@]+@/, ':****@')); // Log URL safely
    
    _sql = neon(url);
    
    // Test the connection immediately
    const client = _sql as any;
    client`SELECT 1`.then((result: any) => {
      console.log('Database connection successful:', result);
    }).catch((error: any) => {
      console.error('Database connection test failed:', error);
    });

    return _sql;
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

export const sql = new Proxy({} as any, {
  get(_t, prop) {
    const client = getSql() as any;
    return client[prop];
  },
  apply(_t, _thisArg, argArray) {
    const client = getSql() as any;
    return (client as any)(...argArray);
  }
});