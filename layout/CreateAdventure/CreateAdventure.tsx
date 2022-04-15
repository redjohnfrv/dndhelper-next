import React from 'react'
import styled from 'styled-components'

//** utils
import {createAdventure} from '../../api/adventures'

//** components
import {Field, Form } from 'react-final-form'
import {Button, Input, Textarea, TitleH1} from '../ui'
import {INewAdventure} from '../../dto/adventure'
import {size} from '../../constants'

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
      <TitleH1 text="Start a new Adventure" align="right" />
      <Adding>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="adventure"
                placeholder="Name your Adventure"
                component={Input}
                label="ADVENTURE: "
              />
              <Field
                name="description"
                placeholder="Add description"
                component={Textarea}
                label="DESCRIPTION: "
              />
              <Button
                type="submit"
                title="Start Adventure"
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
  padding: 48px 0 0 0;
  
  & label {
    display: inline-block;
    font-size: ${size.normalText};
    text-align: right;
    //min-width: 200px;
  }
`
