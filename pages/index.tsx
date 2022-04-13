import styled from 'styled-components'

//** components
import {MainLayout} from '../layout'

interface Props {
  title: string
}

const Home = ({title}: Props) => {

  return (
    <MainLayout title={title} >
      <Wrapper>
          HOME PAGE
      </Wrapper>
    </MainLayout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      title: 'D&D Adventure helper',
    },
  }
}

const Wrapper = styled.div``
