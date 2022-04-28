import {combineReducers} from 'redux'
import adventuresSlice from './adventures/slice'
import modulesSlice from './module/slice'

const rootReducer = combineReducers({
  adventures: adventuresSlice,
  modules: modulesSlice,
})

export {rootReducer}
