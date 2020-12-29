import db from '@config/db'

export default async function team (req, res) {
  try {
    const query = `SELECT p.id, p.title, p.description, p.team_id, p.created_on, p.due_date, p.status, teams.name 
                   FROM projects p 
                   JOIN teams ON p.team_id = teams.id
                   JOIN team_members ON team_members.team_id = teams.id
                   WHERE team_members.user_id = $1`
    const vals = [req.query.user_id]
    const results = await db.query(query, vals)
    res.end(JSON.stringify(results.rows))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t fetch projects' }))
  }
}
