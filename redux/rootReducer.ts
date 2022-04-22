import {combineReducers} from 'redux'
import adventureSlice from './adventure/slice'
import modulesSlice from './modules/slice'

const rootReducer = combineReducers({
  adventure: adventureSlice,
  modules: modulesSlice,
})

export {rootReducer}
