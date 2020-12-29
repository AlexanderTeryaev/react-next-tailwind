import axios from 'axios'

export const FETCH_TEAMS = 'FETCH_TEAMS'

export function fetchTeam (userId: string) {
  return dispatch => {
    axios.get(`/api/team?user_id=${userId}`)
      .then((res) => {
        dispatch({
          type: FETCH_TEAMS,
          payload: res.data
        })
      })
      .catch((err) => console.error(err))
  }
}

export async function addTeamPost (data: object):Promise<any> {
  try {
    const res = await axios.post('/api/team/add', data)
    return res
  } catch (err) {
    console.error(err)
  }
}

export async function fetchTeamMembers (teamId: number):Promise<any> {
  try {
    const res = await axios.post(`/api/team/members?id=${teamId}`)
    return res
  } catch (err) {
    console.error(err)
  }
}
