import {combineReducers} from 'redux'
import adventureSlice from './adventure/slice'
import modulesSlice from './module/slice'

const rootReducer = combineReducers({
  adventure: adventureSlice,
  modules: modulesSlice,
})

export {rootReducer}
