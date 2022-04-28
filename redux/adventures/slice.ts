import {AnyAction, createSlice} from '@reduxjs/toolkit'
import {
  ADVENTURES,
  ADVENTURES_GET,
  IAdventuresState,
} from '../../dto/adventure'
import {FULFILLED, PENDING, REJECTED} from '../../constants'
import {getAdventures} from './thunks'

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

function isFulfilledGetCardsAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES_GET) && action.type.endsWith(FULFILLED)
}

function isRejectedAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES) && action.type.endsWith(REJECTED)
}
//END OF FILTER FUNCTIONS

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState,
  reducers: {
    setAdventuresStore: (state, action) => {
      return action.payload
    },
    clearAdventuresStore: () => {
      return initialState
    }
  },
  extraReducers: (mapBuilder) => {
    mapBuilder.addMatcher(isPendingAction, (state) => {
      state.loading = true
    })
    mapBuilder.addMatcher(isFulfilledGetCardsAction, (state, action) => {
      state.adventures = [...action.payload]
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
export const adventuresActions = {...actions, getAdventures}
export default reducer
