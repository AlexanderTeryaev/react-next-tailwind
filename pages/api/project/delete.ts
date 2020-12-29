import db from '@config/db'

export default async function remove (req, res) {
  try {
    const { id, userId } = req.body
    const conText = 'SELECT admin_id FROM projects LEFT JOIN teams ON projects.team_id = teams.id WHERE projects.id = $1'
    const conValues = [id]
    let result
    result = {}
    result = await db.query(conText, conValues)
    if (result.rows && result.rows[0] && result.rows[0].admin_id && (result.rows[0].admin_id === userId)) {
      const text = 'DELETE FROM projects WHERE id = $1 RETURNING id'
      const values = [id]
      await db.query(text, values)
      res.end(JSON.stringify({ success: true }))
    } else {
      res.statusCode = 300
      res.end(JSON.stringify({ error: true, message: 'server couldn\'t delete project' }))
    }
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t delete project' }))
  }
}
