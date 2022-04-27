export interface ITag {
  name: string
  link: string
}

export interface INote {
  text: string
  tags: ITag[] | []
}

export interface IScenario {
  text: string
  tags: ITag[] | []
}

export interface IPreview {
  text: string
  tags: ITag[] | []
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
  preview: IPreview
  scenario: IScenario
  note?: INote
}

export interface ICreateModule {
  module: string
  overview: string
  preview: string
  scenario: string
}
