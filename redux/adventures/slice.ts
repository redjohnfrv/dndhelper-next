import {AnyAction, createSlice} from '@reduxjs/toolkit'
import {
  ADVENTURES, ADVENTURES_DELETE,
  ADVENTURES_GET,
  IAdventuresState,
} from '../../dto/adventure'
import {FULFILLED, PENDING, REJECTED} from '../../constants'
import {deleteAdventure, getAdventures} from './thunks'

const initialState: IAdventuresState = {
  adventures: [],
  loading: false,
}

//FILTER FUNCTIONS
function isPendingAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES) && action.type.endsWith(PENDING)
}

function isFulfilledAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES) && action.type.endsWith(FULFILLED)
}

function isFulfilledGetAdventuresAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES_GET) && action.type.endsWith(FULFILLED)
}

function isFulfilledDeleteAdventureAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES_DELETE) && action.type.endsWith(FULFILLED)
}

function isRejectedAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES) && action.type.endsWith(REJECTED)
}
//END OF FILTER FUNCTIONS

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState,
  reducers: {
    clearAdventuresStore: () => {
      return initialState
    }
  },
  extraReducers: (mapBuilder) => {
    mapBuilder.addMatcher(isPendingAction, (state) => {
      state.loading = true
    })
    mapBuilder.addMatcher(isFulfilledGetAdventuresAction, (state, action) => {
      state.adventures = [...action.payload]
    })
    mapBuilder.addMatcher(isFulfilledDeleteAdventureAction, (state, action) => {
      const newState = state.adventures.filter(item => item.id !== action.payload)
      state.adventures = [...newState]
    })
    mapBuilder.addMatcher(isFulfilledAction, (state) => {
      state.loading = false
    })
    mapBuilder.addMatcher(isRejectedAction, (state) => {
      state.loading = false
    })
  },
})

const {actions, reducer} = adventuresSlice
export const adventuresActions = {...actions, getAdventures, deleteAdventure}
export default reducer
