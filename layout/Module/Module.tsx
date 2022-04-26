import React from 'react'
import styled from 'styled-components'

//** utils
import {IModule, IOverview} from '../../dto/module'

//** components
import {TitleH1} from '../ui'
import {ModuleContentBlock} from '.'
import {updateOverview} from '../../api/modules'

interface Props {
  module: IModule
}

export const Module = ({module}: Props) => {
  const {id, name, overview, preview, scenario, note = ''} = module

  const updateOverviewHandler = (id: number, overview: IOverview) => {
    updateOverview(String(id), overview)
      .then(res => console.log(res))
  }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />

      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateOverviewHandler={updateOverviewHandler}
        moduleId={id}
      />
      {/*<ModuleContentBlock*/}
      {/*  title="Master preview"*/}
      {/*  text={preview}*/}
      {/*/>*/}
      {/*<ModuleContentBlock*/}
      {/*  title="Scenario"*/}
      {/*  text={scenario}*/}
      {/*/>*/}
      {/*<ModuleContentBlock*/}
      {/*  title="Module notes"*/}
      {/*  text={note ? note : 'No notes ...'}*/}
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
