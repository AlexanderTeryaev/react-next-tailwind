import { FETCH_PROJECTS } from '@actions/project'

export default function project (state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload
    default:
      return state
  }
}
