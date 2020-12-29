import db from '@config/db'

export default async function update (req, res) {
  try {
    const { name, adminId, id } = req.body

    const text = 'UPDATE teams SET name = $2, admin_id = $3, private = $4 WHERE id = $1 RETURNING id'
    const values = [id, name, adminId, 1]

    await db.query(text, values)

    res.end(JSON.stringify({ success: true }))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t update team' }))
  }
}
