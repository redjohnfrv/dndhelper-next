import React from 'react'
import styled from 'styled-components'

//** utils
import {IModule, IOverview, IPreview} from '../../dto/module'
import {updateOverview, updatePreview} from '../../api/modules'

//** components
import {TitleH1} from '../ui'
import {ModuleContentBlock} from '.'

interface Props {
  module: IModule
}

export const Module = ({module}: Props) => {
  const {id, name, overview, preview, scenario, note = ''} = module

  const updateOverviewHandler = (id: number, overview: IOverview) => {
    updateOverview(String(id), overview)
      .then(res => console.log(res))
  }

  const updatePreviewHandler = (id: number, preview: IPreview) => {
    updatePreview(String(id), preview)
      .then(res => console.log(res))
  }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />
      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateHandler={updateOverviewHandler}
        moduleId={id}
      />
      <ModuleContentBlock
        title="Master preview"
        content={preview}
        moduleId={id}
        updateHandler={updatePreviewHandler}
      />
      {/*<ModuleContentBlock*/}
      {/*  title="Scenario"*/}
      {/*  text={scenario}*/}
      {/*/>*/}
      {/*<ModuleContentBlock*/}
      {/*  title="Module notes"*/}
      {/*  text={note ? note : 'No notes ...'}*/}
      {/*  moduleId={id}*/}
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
