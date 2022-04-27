import styled from 'styled-components'

//** utils
import {images} from '../assets/images/images'
import {size} from '../constants'

//** components
import {MainContent, MainLayout} from '../layout'
import {Text, TitleH1} from '../layout/ui'
import Image from 'next/image'

interface Props {
  title: string
}

const Home = ({title}: Props) => {

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <Wrapper>
            <TitleH1 text={title} align="right" />
            <ImageBlock>
              <Image src={images.mainpage} alt="journey" />
              <HelloText>
                <Text size={size.normalText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ...
                </Text>
              </HelloText>
            </ImageBlock>
          </Wrapper>
        }
      />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
`
const ImageBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 272px;
  padding: 24px 0;
  
  & span {
    width: 100% !important;
    height: 100% !important;
  }
  
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 422px); // 100vh - header - footer
  }
`
const HelloText = styled.div`
  position: absolute;
  right: 48px;
  top: 72px;
  height: max-content;
  max-width: 65%;
  padding: 24px;
  background: rgba(224, 224, 224, 0.52);
`
