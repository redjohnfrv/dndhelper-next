import React from 'react'
import styled from 'styled-components'

//** utils
import {createAdventure} from '../../api/adventures'

//** components
import {Field, Form } from 'react-final-form'
import {Button, Input, Textarea} from '../ui'
import {INewAdventure} from '../../dto/adventure'

export const CreateAdventure = () => {

  const onSubmit = (values: INewAdventure) => {
    const {adventure, description} = values

    createAdventure({
      name: adventure,
      desc: description,
      avatar: null,
      modules: [],
    })
  }

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="adventure"
              placeholder="Name your Adventure"
              component={Input}
              label="adventure"
            />
            <Field
              name="description"
              placeholder="Add description"
              component={Textarea}
              label="description"
            />
            {/*<Field*/}
            {/*  type="password"*/}
            {/*  name="password"*/}
            {/*  placeholder="Password"*/}
            {/*  component={Input}*/}
            {/*/>*/}
            <Button
              type="submit"
              title="Start Adventure"
            />
          </form>
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
