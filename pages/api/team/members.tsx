import db from '@config/db'

export default async function members (req, res) {
  try {
    const teamId = req.query.id
    const query = `SELECT users.name, users.id FROM users
                   LEFT JOIN team_members ON team_members.user_id = users.id
                   WHERE team_members.team_id = $1`

    const vals = [teamId]
    const results = await db.query(query, vals)
    res.end(JSON.stringify(results.rows))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t fetch team members' }))
  }
}
