import { combineReducers } from 'redux'
import user from './user'
import team from './team'
import project from './project'

const rootReducer = combineReducers({
  user,
  team,
  project
})

export default rootReducer
