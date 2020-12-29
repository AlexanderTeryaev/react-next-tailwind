import dayjs from 'dayjs'
// import axios from 'axios'
import db from '@config/db'

// const options = {
//   method: 'POST',
//   url: 'https://retro-avatar-generator.p.rapidapi.com/generate-avatar/',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'x-rapidapi-key': '',
//     'x-rapidapi-host': 'retro-avatar-generator.p.rapidapi.com'
//   },
//   data: { seed: 'guest' }
// }

// axios.request(options).then(function (response) {
//   console.log(response.data)
// }).catch(function (error) {
//   console.error(error)
// })

// let image = await axios.get('http://aaa.bbb/image.png', {responseType: 'arraybuffer'});
// let returnedB64 = Buffer.from(image.data).toString('base64');

type Row = {
  rows: Array<any>
}

export default async function add (req, res) {
  try {
    const { name, user } = req.body

    const text = `INSERT INTO teams(name, created_on, admin_id)
            VALUES($1, $2, $3) RETURNING id`
    const values = [name.toLowerCase(), dayjs().format(), user.id]

    const newTeam: Row = await db.query(text, values)
    const { id } = newTeam.rows[0]

    const text2 = `INSERT INTO team_members(user_id, created_on, team_id, team_lead)
    VALUES($1, $2, $3, $4) RETURNING id`
    const values2 = [user.id, dayjs().format(), id, true]

    await db.query(text2, values2)

    res.end(JSON.stringify({ success: true }))
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.end(JSON.stringify({ error: true, message: 'server couldn\'t create team' }))
  }
}
