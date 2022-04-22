import {IModule} from '../dto/module'
import {IContentTab} from '../dto/adventure'

// FIXME add types for quests, npc, players
export const getTabList = (adventureOptions: IModule[] | any[]) => {
  const content: IContentTab[] = []

  adventureOptions.forEach((item: IModule | any) =>
    content.push(
      {id: item.id, name: item.name, link: item.link}
    ))

  return content
}
