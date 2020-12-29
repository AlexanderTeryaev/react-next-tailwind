import dayjs from 'dayjs'
import db from '@config/db'

export default async function update (req, res) {
  try {
    const { id, title, description, teamId, dueDate, isPrivate, status } = req.body
    const values = [id, title, description, teamId, dayjs().format(), dueDate, isPrivate, status]
    const text = 'UPDATE projects SET title = $2, description = $3, team_id = $4, created_on = $5, due_date = $6, private = $7, status = $8 WHERE id = $1 RETURNING id'

    await db.query(text, values)
    res.end(JSON.stringify({ success: true }))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t update project' }))
  }
}
