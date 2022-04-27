import React from 'react'
import styled from 'styled-components'

//** utils
import {useRouter} from 'next/router'
import {createAdventure} from '../../api/adventures'
import {INewAdventure} from '../../dto/adventure'
import {routes, size} from '../../constants'
import {composeValidators, validators} from '../../helpers'
import {useSwitcher} from '../../hooks'

//** components
import {Field, Form } from 'react-final-form'
import {Button, FormInput, FormTextarea, TitleH1} from '../ui'

export const CreateAdventure = () => {
  const router = useRouter()
  const {push} = router
  const isLoading = useSwitcher()

  const onSubmit = (values: INewAdventure) => {
    const {adventure, description} = values

    isLoading.on()

    createAdventure({
      name: adventure,
      desc: description,
      avatar: null,
    })
      .then(advId => {
        isLoading.off()
        push(routes.adventures + `/${advId}`)
      })
  }

  return (
    <Wrapper>
      <TitleH1 text="Start new Adventure" align="right" />
      <Adding>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit, invalid}) => (
            <form onSubmit={handleSubmit}>
              <Button
                type="submit"
                title="Start"
                disable={invalid}
                small={true}
                loading={isLoading.isOn}
              />
              <Field
                name="adventure"
                placeholder="Name your Adventure"
                component={FormInput}
                label="ADVENTURE: "
                validate={composeValidators(validators.required)}
              />
              <Field
                name="description"
                placeholder="Add description"
                component={FormTextarea}
                label="DESCRIPTION: "
              />
            </form>
          )}
        />
      </Adding>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const Adding = styled.div`
  position: relative;
  padding: 48px 0 0 0;
  
  & label {
    width: 180px;
    display: inline-block;
    font-size: ${size.normalText};
    text-align: right;
  }
  
  & input {
    margin-bottom: 48px;
  }
  
  & button {
    position: absolute;
    top: 48px;
    right: 27.5%;
  }
`
