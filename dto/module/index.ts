export interface IModule {
  id: number
  advId: number
  link: string
  name: string
  overview: string
  preview: string
  scenario: string
  note?: string
}

export interface ICreateModule {
  module: string
  overview: string
  preview: string
  scenario: string
}
