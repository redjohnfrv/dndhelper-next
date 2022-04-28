import {RootState} from '..'
import {createSelector} from 'reselect'
import {selectAdventure} from '../adventures/selector'
import {IModule} from '../../dto/module'

export const selectModules = (state: RootState) => state.modules

export const selectModulesByAdvId = createSelector(
  (state: RootState) => ({
    adventure: selectAdventure(state),
    modules: selectModules(state),
  }),
  ({modules, adventure}) => modules.filter((module: IModule) => module.advId === adventure.id)
)
