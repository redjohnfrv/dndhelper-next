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
import {Button, TitleH1} from '../ui'
import {ModuleContentBlock} from '.'
import {routes} from '../../constants'
import {useRouter} from 'next/router'

interface Props {
  module: IModule | []
}

export const Module = ({module = []}: Props) => {
  const {
    id,
    name,
    overview,
    preview,
    scenario,
    notes,
    advId
  } = module as IModule
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {push} = router
  const isRequesting = useSelector(modulesSelector.isModulesLoading)

  const moduleUpdateHandler = (
    id: number,
    payload: {
      overview?: IOverview,
      preview?: IPreview,
      scenario?: IScenario,
      notes?: INote,
    }
    ) => {
      dispatch(modulesActions.updateModule({
        id: String(id),
        ...payload,
      }))
  }

  const deleteModuleHandler = () => {
    dispatch(modulesActions.deleteModule(String(id)))
      .then(() => push(`${routes.adventures}/${advId}`))
  }

  return (
    <Wrapper>
      <TitleH1 text={name} align="right" />
      <DeleteWrapper>
        <Button
          title="Delete"
          theme="warning"
          small={true}
          onClick={deleteModuleHandler}
          disable={isRequesting}
        />
      </DeleteWrapper>
      <ModuleContentBlock
        title="Module overview"
        content={overview}
        updateHandler={moduleUpdateHandler}
        moduleId={id}
        loading={isRequesting}
        entityName="overview"
      />
      <ModuleContentBlock
        title="Master preview"
        content={preview}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isRequesting}
        entityName="preview"
      />
      <ModuleContentBlock
        title="Scenario"
        content={scenario}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isRequesting}
        entityName="scenario"
      />
      <ModuleContentBlock
        title="Module notes"
        content={notes}
        moduleId={id}
        updateHandler={moduleUpdateHandler}
        loading={isRequesting}
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
const DeleteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
  & button {
    position: relative;
    top: -60px;
  }
`
