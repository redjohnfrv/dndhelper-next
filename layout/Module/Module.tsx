import React from 'react'
import styled from 'styled-components'

//** utils
import {
  IModule,
  IOverview,
  IPreview,
  IScenario,
  INote
} from '../../dto/module'
import {
  updateOverview,
  updatePreview,
  updateScenario,
  updateNotes
} from '../../api/modules'
import {useAppDispatch, useSwitcher} from '../../hooks'

//** components
import {TitleH1} from '../ui'
import {ModuleContentBlock} from '.'
import {modulesActions} from '../../redux/modules'

interface Props {
  module: IModule | []
}

export const Module = ({module = []}: Props) => {
  const {id, name, overview, preview, scenario, notes} = module as IModule
  const overviewLoading = useSwitcher()
  const previewLoading = useSwitcher()
  const scenarioLoading = useSwitcher()
  const notesLoading = useSwitcher()
  const dispatch = useAppDispatch()

  const moduleUpdateHandler = (id: number, payload: { overview?: IOverview, preview?: IPreview }) => {
      dispatch(modulesActions.moduleUpdate({
        id: String(id),
        ...payload,
      }))
  }

  // const updatePreviewHandler = (id: number, preview: IPreview) => {
  //   previewLoading.on()
  //   updatePreview(String(id), preview)
  //     .then(() => previewLoading.off())
  // }
  //
  // const updateScenarioHandler = (id: number, scenario: IScenario) => {
  //   scenarioLoading.on()
  //   updateScenario(String(id), scenario)
  //     .then(() => scenarioLoading.off())
  // }
  //
  // const updateNotesHandler = (id: number, note: INote) => {
  //   notesLoading.on()
  //   updateNotes(String(id), note)
  //     .then(() => notesLoading.off())
  // }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />
      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateHandler={moduleUpdateHandler}
        moduleId={id}
        loading={overviewLoading.isOn}
        entityName="overview"
      />
      <ModuleContentBlock
        title="Master preview"
        content={preview}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={previewLoading.isOn}
        entityName="preview"
      />
      {/*<ModuleContentBlock*/}
      {/*  title="Scenario"*/}
      {/*  content={scenario}*/}
      {/*  moduleId={id}*/}
      {/*  updateHandler={updateScenarioHandler}*/}
      {/*  loading={scenarioLoading.isOn}*/}
      {/*/>*/}
      {/*<ModuleContentBlock*/}
      {/*  title="Module notes"*/}
      {/*  content={notes}*/}
      {/*  moduleId={id}*/}
      {/*  updateHandler={updateNotesHandler}*/}
      {/*  loading={notesLoading.isOn}*/}
      {/*/>*/}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  
  & h1 {
    margin-bottom: 96px;
  }
`
