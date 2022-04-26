export interface ITag {
  id: number
  name: string
  link: string
}

export interface IOverview {
  text: string
  tags: ITag[] | []
}

export interface IModule {
  id: number
  advId: number
  link: string
  name: string
  overview: IOverview
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
