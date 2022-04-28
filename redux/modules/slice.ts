import {AnyAction, createSlice} from '@reduxjs/toolkit'
import {IModuleState, MODULES, MODULES_GET} from '../../dto/module'
import {FULFILLED, PENDING, REJECTED} from '../../constants'
import {getModules} from './thunks'

const initialState: IModuleState = {
  modules: [],
  loading: false,
}

//FILTER FUNCTIONS
function isPendingAction(action: AnyAction) {
  return action.type.startsWith(MODULES) && action.type.endsWith(PENDING)
}

function isFulfilledAction(action: AnyAction) {
  return action.type.startsWith(MODULES) && action.type.endsWith(FULFILLED)
}

function isFulfilledGetModulesAction(action: AnyAction) {
  return action.type.startsWith(MODULES_GET) && action.type.endsWith(FULFILLED)
}

function isRejectedAction(action: AnyAction) {
  return action.type.startsWith(MODULES) && action.type.endsWith(REJECTED)
}
//END OF FILTER FUNCTIONS

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {},
  extraReducers: (mapBuilder) => {
    mapBuilder.addMatcher(isPendingAction, (state) => {
      state.loading = true
    })
    mapBuilder.addMatcher(isFulfilledGetModulesAction, (state, action) => {
      state.modules = [...action.payload]
    })
    mapBuilder.addMatcher(isFulfilledAction, (state) => {
      state.loading = false
    })
    mapBuilder.addMatcher(isRejectedAction, (state) => {
      state.loading = false
    })
  },
})

const {actions, reducer} = modulesSlice
export const modulesActions = {
  ...actions,
  getModules,
}
export default reducer
