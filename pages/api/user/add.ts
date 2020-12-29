import dayjs from 'dayjs'
import db from '@config/db'

export default async function add (req, res) {
  try {
    const { id, email, name: { givenName }, nickname } = req.body

    const firstName = givenName || nickname

    const text = `INSERT INTO users(id, name, email, role_id, created_on)
            VALUES($1, $2, $3, $4, $5) RETURNING id`
    const values = [id, firstName, email, 1, dayjs().format()]

    await db.query(text, values)

    res.end(JSON.stringify({ success: true }))
  } catch (err) {
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t create user' }))
  }
}
