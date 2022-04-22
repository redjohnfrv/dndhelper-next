import {createSlice} from '@reduxjs/toolkit'
import {IModule} from '../../dto/module'

const initialState: IModule[] = []

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setModuleInStore: (state, action) => {
      return action.payload
    },
    updateModulesInStore: (state, action) => {
      return {
        ...state,
        modules: action.payload
      }
    }
  }
})

export default modulesSlice.reducer
export const {setModuleInStore, updateModulesInStore} = modulesSlice.actions
