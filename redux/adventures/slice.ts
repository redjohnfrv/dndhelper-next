import {AnyAction, createSlice} from '@reduxjs/toolkit'
import {
  ADVENTURES, ADVENTURES_AVATAR, ADVENTURES_CREATE, ADVENTURES_DELETE,
  ADVENTURES_GET,
  IAdventuresState,
} from '../../dto/adventure'
import {FULFILLED, PENDING, REJECTED} from '../../constants'
import {
  createAdventure,
  deleteAdventure,
  getAdventures,
  setAdventureAvatar,
} from './thunks'

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

function isFulfilledCreateAdventureAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES_CREATE) && action.type.endsWith(FULFILLED)
}

function isFulfilledSetAdventureAvatarAction(action: AnyAction) {
  return action.type.startsWith(ADVENTURES_AVATAR) && action.type.endsWith(FULFILLED)
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
    mapBuilder.addMatcher(isFulfilledCreateAdventureAction, (state, action) => {
      const cloneState = [...state.adventures]
      state.adventures = [...cloneState, action.payload]
    })
    mapBuilder.addMatcher(isFulfilledSetAdventureAvatarAction, (state, action) => {
      const cloneState = [...state.adventures]
      cloneState.forEach(item => {
        if (item.id === action.payload.id) item.avatar = action.payload.avatar
      })
      state.adventures = [...cloneState]
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
export const adventuresActions = {
  ...actions,
  getAdventures,
  deleteAdventure,
  createAdventure,
  setAdventureAvatar,
}
export default reducer
