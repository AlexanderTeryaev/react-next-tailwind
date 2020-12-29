export const FETCH_USER = 'FETCH_USER'

export function fetchUser (payload: object) {
  return dispatch => {
    dispatch({
      type: FETCH_USER,
      payload
    })
  }
}
