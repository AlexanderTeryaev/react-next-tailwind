import axios from 'axios'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'

export function fetchProject (userId: string) {
  return dispatch => {
    axios.get(`/api/project?user_id=${userId}`)
      .then((res) => {
        dispatch({
          type: FETCH_PROJECTS,
          payload: res.data
        })
      })
      .catch((err) => console.error(err))
  }
}

export async function addProject (data: object):Promise<any> {
  try {
    const res = await axios.post('/api/project/add', data)
    return res
  } catch (err) {
    console.error(err)
  }
}

export async function updateProject (data: object):Promise<any> {
  try {
    const res = await axios.post('/api/project/update', data)
    return res
  } catch (err) {
    console.error(err)
  }
}
