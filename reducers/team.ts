import { FETCH_TEAMS } from '../actions/team'

export default function team (state = {}, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return action.payload
    default:
      return state
  }
}
