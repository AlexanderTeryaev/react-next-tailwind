import dayjs from 'dayjs'
import db from '@config/db'

export default async function add (req, res) {
  try {
    const { name, description, teamId, dueDate, isPrivate } = req.body
    const text = `INSERT INTO projects(title, description, team_id, created_on, due_date, private, status)
            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id`
    const values = [name, description, teamId, dayjs().format(), dueDate, isPrivate, 1]
    await db.query(text, values)
    res.end(JSON.stringify({ success: true }))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t create project' }))
  }
}
