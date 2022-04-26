import React from 'react'
import styled from 'styled-components'

//** utils
import {IModule, IOverview, IPreview} from '../../dto/module'
import {updateOverview, updatePreview} from '../../api/modules'
import {useSwitcher} from '../../hooks/useSwitcher'

//** components
import {TitleH1} from '../ui'
import {ModuleContentBlock} from '.'

interface Props {
  module: IModule
}

export const Module = ({module}: Props) => {
  const {id, name, overview, preview, scenario, note = ''} = module
  const overviewLoading = useSwitcher()
  const previewLoading = useSwitcher()

  const updateOverviewHandler = (id: number, overview: IOverview) => {
    overviewLoading.on()
    updateOverview(String(id), overview)
      .then(() => overviewLoading.off())
  }

  const updatePreviewHandler = (id: number, preview: IPreview) => {
    previewLoading.on()
    updatePreview(String(id), preview)
      .then(() => previewLoading.off())
  }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />
      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateHandler={updateOverviewHandler}
        moduleId={id}
        loading={overviewLoading.isOn}
      />
      <ModuleContentBlock
        title="Master preview"
        content={preview}
        moduleId={id}
        updateHandler={updatePreviewHandler}
        loading={previewLoading.isOn}
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
