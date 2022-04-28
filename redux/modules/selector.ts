import {RootState} from '..'
import {createSelector} from 'reselect'
import {selectAdventures} from '../adventures/selector'
import {IModule} from '../../dto/module'
import {IAdventure} from '../../dto/adventure'

export const selectModules = (state: RootState) => state.modules.modules
export const isModulesLoading = (state: RootState) => state.modules.loading

export const selectModulesByAdvId = createSelector(
  (state: RootState) => ({
    adventures: selectAdventures(state),
    modules: selectModules(state),
  }),
  ({modules, adventures}) => modules.filter((module: IModule) => {
    adventures.map((adv: IAdventure) => adv.id === module.advId)
  })
)
