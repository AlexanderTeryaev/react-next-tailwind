import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.POSTGRES_URL })

export default {
  query: async (text, params) => {
    const client = await pool.connect()
    try {
      return client.query(text, params)
    } catch (e) {
      console.log('connection error', e)
    } finally {
      client.release()
    }
  },
  pool
}
