import {createSlice} from '@reduxjs/toolkit'
import {IAdventure} from '../../dto/adventure'

const initialState: IAdventure = {
  id: 0,
  name: '',
  desc: '',
  avatar: null,
}

const adventureSlice = createSlice({
  name: 'adventure',
  initialState,
  reducers: {
    setAdventureInStore: (state, action) => {
      return action.payload
    },
    clearAdventureFromStore: () => {
      return initialState
    }
  }
})

export default adventureSlice.reducer
export const {setAdventureInStore, clearAdventureFromStore} = adventureSlice.actions
