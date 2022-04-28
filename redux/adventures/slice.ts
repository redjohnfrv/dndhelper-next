import {createSlice} from '@reduxjs/toolkit'

const initialState = [] as never[]

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
  }
})

export default adventuresSlice.reducer
export const {setAdventuresStore, clearAdventuresStore} = adventuresSlice.actions
