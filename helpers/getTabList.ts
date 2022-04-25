import {IContentTab} from '../dto/adventure'
import {IModule} from '../dto/module'

// FIXME add types for quests, npc, players
export const getTabList = (adventureOptions: IModule[] | any[], advId: number) => {
  const content: IContentTab[] = []

  if (adventureOptions.length > 0) {
    adventureOptions.forEach((item: IModule | any) => {
      if (item.advId === advId) {
        content.push(
          {id: item.id, name: item.name, link: item.link}
        )
      }
    })

    return content
  } else return []
}
