import { FETCH_USER } from '../actions/user'

export default function _user (state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}
