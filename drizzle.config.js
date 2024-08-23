import { drizzle } from 'drizzle-orm/pg'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.VITE_NEON_DB_URL // Your Neon DB URL
})

export const db = drizzle(pool)
