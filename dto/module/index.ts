export interface ITag {
  name: string
  link: string
}

export interface IUnit {
  title: string
  content: string
}

export interface INote {
  text: string
  units: IUnit[] | []
  tags: ITag[] | []
}

export interface IScenario {
  text: string
  units: IUnit[] | []
  tags: ITag[] | []
}

export interface IPreview {
  text: string
  units: IUnit[] | []
  tags: ITag[] | []
}

export interface IOverview {
  text: string
  units: IUnit[] | []
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
  notes?: INote
}

export interface ICreateModule {
  module: string
  overview: string
  preview: string
  scenario: string
}
