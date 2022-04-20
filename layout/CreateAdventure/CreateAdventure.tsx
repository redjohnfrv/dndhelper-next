import React from 'react'
import styled from 'styled-components'

//** utils
import {useRouter} from 'next/router'
import {createAdventure} from '../../api/adventures'
import {INewAdventure} from '../../dto/adventure'
import {routes, size} from '../../constants'
import {composeValidators, validators} from '../../helpers'

//** components
import {Field, Form } from 'react-final-form'
import {Button, Input, Textarea, TitleH1} from '../ui'

export const CreateAdventure = () => {
  const router = useRouter()
  const {push} = router

  const onSubmit = (values: INewAdventure) => {
    const {adventure, description} = values

    createAdventure({
      name: adventure,
      desc: description,
      avatar: null,
      modules: [],
      quests: [],
      npc: [],
      players: [],
    })
      .then(advId => push(routes.adventures + `/${advId}`))
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
                title="Start Adventure"
                disable={invalid}
              />
              <Field
                name="adventure"
                placeholder="Name your Adventure"
                component={Input}
                label="ADVENTURE: "
                validate={composeValidators(validators.required)}
              />
              <Field
                name="description"
                placeholder="Add description"
                component={Textarea}
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
    left: 47.5%;
  }
`
