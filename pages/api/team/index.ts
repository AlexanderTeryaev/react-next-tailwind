import db from '@config/db'

export default async function team (req, res) {
  try {
    const userId = req.query.user_id
    const query = `SELECT teams.name, teams.created_on, team_members.team_id, team_members.team_lead FROM teams 
                   LEFT JOIN team_members ON team_members.team_id = teams.id
                   WHERE team_members.user_id = $1`

    const vals = [userId]
    const results = await db.query(query, vals)
    res.end(JSON.stringify(results.rows))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t fetch teams' }))
  }
}
