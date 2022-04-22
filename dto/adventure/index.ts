import {IModule} from '../module'

export interface IAdventure {
  id: number
  name: string
  desc: string
  avatar: string | null
  modules: IModule[]
  quests: Array<unknown>
  npc: Array<unknown>
  players: Array<unknown>
}

export interface INewAdventure {
  adventure: string
  description: string
  avatar: string | null
}

export interface IContentTab {
  id: number
  name: string
  link: string
}
