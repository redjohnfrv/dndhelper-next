import React from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

//** utils
import {composeValidators, validators} from '../../../helpers'
import {useAppDispatch, useSwitcher} from '../../../hooks'
import {ICreateModule} from '../../../dto/module'
import {routes, size} from '../../../constants'
import {modulesActions, modulesSelector} from '../../../redux/modules'

//** components
import {Field, Form} from 'react-final-form'
import {Button, FormInput, FormTextarea} from '../../ui'

interface Props {
  advId: number
}

export const CreateModule = ({advId}: Props) => {
  const router = useRouter()
  const {push} = router
  const showForm = useSwitcher()
  const isCreating = useSelector(modulesSelector.isModulesLoading)

  const dispatch = useAppDispatch()

  const onSubmit = (values: ICreateModule) => {
    const {module, overview, preview, scenario} = values

    dispatch(modulesActions.createModule({
      advId,
      link: routes.modules,
      name: module,
      overview: {
        text: overview,
        units: [],
        tags: [],
      },
      preview: {
        text: preview,
        units: [],
        tags: [],
      },
      scenario: {
        text: scenario,
        units: [],
        tags: [],
      },
      notes: {
        text: '',
        units: [],
        tags: [],
      },
    }))
      .then(module =>  {
        push(`${routes.modules}/${module.payload.id}`)
      })
  }

  return (
    <Wrapper>
      <CreateButtonWrapper>
        <Button
          title="CREATE MODULE"
          onClick={() => showForm.toggle()}
        />
      </CreateButtonWrapper>
      {showForm.isOn && <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="module"
              placeholder="Module name"
              component={FormInput}
              label="MODULE: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="overview"
              placeholder="Enter overview"
              component={FormTextarea}
              label="OVERVIEW: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="preview"
              placeholder="Module preview"
              component={FormTextarea}
              label="MASTER PREVIEW: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="scenario"
              placeholder="Write new scenario"
              component={FormTextarea}
              label="SCENARIO: "
              validate={composeValidators(validators.required)}
            />
            <SubmitButtonWrapper>
              <Button
                type="submit"
                title="Add module"
                disable={invalid}
                loading={isCreating}
              />
            </SubmitButtonWrapper>
          </form>
        )}
      />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  
  & h2 {
    margin-bottom: 24px;
  }
  
  & input, textarea {
    margin-bottom: 12px;
  }
  
  & label {
    max-width: 122px;
    margin-right: 24px;
    font-size: ${size.normalText};
    font-weight: bold;
    white-space: pre-wrap;
  }
`
const CreateButtonWrapper = styled.div`
  & button {
    width: max-content;
    padding: 12px 24px;
    margin-bottom: 48px;
  }
`
const SubmitButtonWrapper = styled.div`
  padding-left: 164px;
`
