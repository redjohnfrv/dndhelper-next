export interface IAdventure {
  id: number
  name: string
  desc: string
  avatar: string | null
  modules: Array<unknown>
}

export interface INewAdventure {
  adventure: string
  description: string
  avatar: string | null
}
