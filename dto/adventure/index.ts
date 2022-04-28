export interface IAdventuresState {
  adventures: IAdventure[]
  loading: boolean
}

export interface IAdventure {
  id: number
  name: string
  desc: string
  avatar: string | null
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

export const ADVENTURES = 'adventures/'
export const ADVENTURES_GET = 'adventures/get'
export const ADVENTURES_DELETE = 'adventures/delete'
