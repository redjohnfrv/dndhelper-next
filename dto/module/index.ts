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

export interface IModuleState {
  modules: IModule[]
  loading: boolean
}

export const MODULES = 'modules/'
export const MODULES_GET = 'modules/get'
export const MODULES_CREATE = 'modules/create'
export const MODULES_UPDATE = 'modules/update'
export const MODULES_DELETE = 'modules/delete'
