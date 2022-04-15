export interface IAdventure {
  id: number
  name: string
  desc: string
  avatar: string | null
  modules: Array<unknown>
}
