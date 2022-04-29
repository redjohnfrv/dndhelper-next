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
import {useAppDispatch} from '../../hooks'
import {modulesActions, modulesSelector} from '../../redux/modules'
import {useSelector} from 'react-redux'

//** components
import {TitleH1} from '../ui'
import {ModuleContentBlock} from '.'

interface Props {
  module: IModule | []
}

export const Module = ({module = []}: Props) => {
  const {id, name, overview, preview, scenario, notes} = module as IModule
  const dispatch = useAppDispatch()
  const isSaving = useSelector(modulesSelector.isModulesLoading)

  const moduleUpdateHandler = (
    id: number,
    payload: {
      overview?: IOverview,
      preview?: IPreview,
      scenario?: IScenario,
      notes?: INote,
    }
    ) => {
      dispatch(modulesActions.moduleUpdate({
        id: String(id),
        ...payload,
      }))
  }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />
      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateHandler={moduleUpdateHandler}
        moduleId={id}
        loading={isSaving}
        entityName="overview"
      />
      <ModuleContentBlock
        title="Master preview"
        content={preview}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isSaving}
        entityName="preview"
      />
      <ModuleContentBlock
        title="Scenario"
        content={scenario}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isSaving}
        entityName="scenario"
      />
      <ModuleContentBlock
        title="Module notes"
        content={notes}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isSaving}
        entityName="notes"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  
  & h1 {
    margin-bottom: 96px;
  }
`
