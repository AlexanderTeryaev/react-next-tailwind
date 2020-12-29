import db from '@config/db'

export default async function user (req, res) {
  try {
    const userId = req.query.user_id
    const query = 'SELECT * FROM users WHERE id = $1'
    const vals = [userId]
    const results = await db.query(query, vals)
    res.end(JSON.stringify(results.rows))
  } catch (err) {
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t fetch user' }))
  }
}
