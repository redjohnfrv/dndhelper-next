import React from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'

//** utils
import {composeValidators, validators} from '../../../helpers'
import {useAppDispatch, useSwitcher} from '../../../hooks'
import {ICreateModule} from '../../../dto/module'
import {color, routes, size} from '../../../constants'
import {modulesActions, modulesSelector} from '../../../redux/modules'

//** components
import {Field, Form} from 'react-final-form'
import {Button, FormInput, FormTextarea} from '../../ui'
import {useSelector} from 'react-redux'

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
      <FormTitle onClick={() => showForm.toggle()}>
        CREATE MODULE
      </FormTitle>
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
            <Button
              type="submit"
              title="Add module"
              disable={invalid}
              loading={isCreating}
            />
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
  
  & button {
    margin: 0 0 0 169px;
  }
`
const FormTitle = styled.button`
  font-size: ${size.normalText};
  color: ${color.black};
  margin: 0 0 24px 0 !important;
`
