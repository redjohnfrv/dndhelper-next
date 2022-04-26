import React from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'

//** utils
import {composeValidators, validators} from '../../../helpers'
import {createModule} from '../../../api/modules'
import {useSwitcher} from '../../../hooks/useSwitcher'
import {ICreateModule} from '../../../dto/module'
import {color, routes, size} from '../../../constants'

//** components
import {Field, Form} from 'react-final-form'
import {Button, Input, Textarea} from '../../ui'

interface Props {
  advId: number
}

export const CreateModule = ({advId}: Props) => {
  const router = useRouter()
  const {push} = router
  const showForm = useSwitcher()

  const onSubmit = (values: ICreateModule) => {
    const {module, overview, preview, scenario} = values

    createModule({
      advId,
      link: routes.modules,
      name: module,
      overview: {
        text: overview,
        tags: [],
      },
      preview,
      scenario,
      note: '',
    })
      .then(moduleId =>  push(`${routes.modules}/${moduleId}`))
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
              component={Input}
              label="MODULE: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="overview"
              placeholder="Enter overview"
              component={Textarea}
              label="OVERVIEW: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="preview"
              placeholder="Module preview"
              component={Textarea}
              label="MASTER PREVIEW: "
              validate={composeValidators(validators.required)}
            />
            <Field
              name="scenario"
              placeholder="Write new scenario"
              component={Textarea}
              label="SCENARIO: "
              validate={composeValidators(validators.required)}
            />
            <Button
              type="submit"
              title="Add module"
              disable={invalid}
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
