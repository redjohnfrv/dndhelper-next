import {GetStaticPropsContext} from 'next/types'

//** utils
import {IAdventure} from '../../dto/adventure'
import {getAdventures} from '../../api/adventures'

//** components
import {
  MainContent,
  MainLayout,
  AdvContent
} from '../../layout'

interface Props {
  advId: string
  adventure: IAdventure[]
}

const Adventure = ({advId, adventure}: Props) => {

  return (
    <MainLayout title={`Adventure ${advId}`}>
      <MainContent
        content={
          <AdvContent adventures={adventure} id={advId} />
        }
      />
    </MainLayout>
  )
}

export default Adventure

interface Ids {
  params: {
    id: string
  }
}

export async function getStaticPaths() {

  const IdsArray: Ids[] = []

  const adventures: IAdventure[] = await getAdventures()
  adventures.forEach((item: IAdventure) => IdsArray.push({params: {id: String(item.id)}}))

  return {
    paths: IdsArray,
    fallback: false,
  }
}

export async function getStaticProps({params}: GetStaticPropsContext) {

  const adventures: IAdventure[] = await getAdventures()

  if (params) {
    const id = params.id
    const adventure = adventures.filter(item => String(item.id) === id)

    return {
      props: {
        advId: id,
        adventure,
      },
    }
  }

  return {
    notFound: true,
  }
}
