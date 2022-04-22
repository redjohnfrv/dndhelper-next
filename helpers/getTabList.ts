import {IModule} from '../dto/module'
import {IContentTab} from '../dto/adventure'

// FIXME add types for quests, npc, players
export const getTabList = (adventureOptions: IModule[] | any[]) => {
  const content: IContentTab[] = []

  if (adventureOptions.length > 0) {
    adventureOptions.forEach((item: IModule | any) =>
      content.push(
        {id: item.id, name: item.name, link: item.link}
      ))
  }

  return content
}

// export const getTabLists = (adventureTabs: any[]) => {
//   const tabs: any = []
//   adventureTabs.forEach((item: any) => {
//     tabs.push(getTabList(item))
//   })
//
//   return tabs
// }
