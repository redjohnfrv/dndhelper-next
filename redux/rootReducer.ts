import {combineReducers} from 'redux'
import adventuresSlice from './adventures/slice'
import modulesSlice from './modules/slice'

const rootReducer = combineReducers({
  adventures: adventuresSlice,
  modules: modulesSlice,
})

export {rootReducer}
