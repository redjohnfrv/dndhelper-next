import {createSlice} from '@reduxjs/toolkit'
import {IModule} from '../../dto/module'

const initialState: IModule[] = []

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setModuleInStore: (state, action) => {
      const newState = []
      newState.push(action.payload)
      return [...state, ...newState]
    },
  }
})

export default modulesSlice.reducer
export const {setModuleInStore} = modulesSlice.actions
