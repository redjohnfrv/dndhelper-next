import {combineReducers} from 'redux'
import adventureSlice from './adventure/slice'

const rootReducer = combineReducers({
  adventure: adventureSlice,
})

export {rootReducer}
