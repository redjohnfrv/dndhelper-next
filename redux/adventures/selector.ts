import {RootState} from '..'
import {createSelector} from 'reselect'
import {IAdventure} from '../../dto/adventure'

export const selectAdventures = (state: RootState) =>
  state.adventures.adventures

export const isAdventureLoading = (state: RootState) => state.adventures.loading

export const selectAdventureById = (adventureId: string) => createSelector(
  (state: RootState) => ({
    adventures: selectAdventures(state),
    adventureId,
  }),
  ({adventures, adventureId}) =>
    adventures.find((adv: IAdventure) =>
      String(adv.id) === adventureId) as IAdventure
)

/** alternate variant **/
// const adventure = useSelector((state: RootState) => selectAdventureById(state, advId))

// export const selectAdventureById = createSelector(
//   (state: RootState) => state.adventures.adventures,
//   (state: RootState, adventureId: string) => adventureId,
//   (adventures, adventureId) => adventures.find(adv => String(adv.id) === adventureId)
// )
