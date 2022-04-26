import React from 'react'
import styled from 'styled-components'

//** utils
import {IOverview} from '../../../dto/module'

//** components
import {Text, TitleH2} from '../../ui'
import Link from 'next/link'

interface Props {
  title: string
  text?: string
  content?: IOverview
}

const initialContent: IOverview = {
  text: '',
  tags: [{
    id: 0,
    name: '',
    link: '',
  }]
}

export const ModuleContentBlock = ({title, content = initialContent}: Props) => {

  const {text, tags} = content as IOverview

  return (
    <Wrapper>
      <TitleH2 text={title} />
      <Text>
        {text}
      </Text>
      <Tags>
        {tags.map(item => <Link key={item.id} href={item.link}><a>{item.name}</a></Link>)}
      </Tags>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
const Tags = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
