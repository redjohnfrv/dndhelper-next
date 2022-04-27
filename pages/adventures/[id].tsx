import {GetStaticPropsContext} from 'next/types'

//** utils
import {IAdventure} from '../../dto/adventure'
import {getAdventures} from '../../api/adventures'

//** components
import {
  MainContent,
  MainLayout,
  Adventure,
} from '../../layout'

interface Props {
  advId: string
  adventure: IAdventure[] | string
}

const AdventureId = ({advId, adventure}: Props) => {

  return (
    <MainLayout title={`Adventure ${advId}`}>
      <MainContent content={
        <Adventure adventures={
          Array.isArray(adventure) /** 'adventures' can be implement as an error string instead of array **/
            ? adventure[0]
            : adventure
        } />
      }
    />
    </MainLayout>
  )
}

export default AdventureId

interface Ids {
  params: {
    id: string
  }
}

export async function getStaticPaths() {
  const IdsArray: Ids[] = []

  const adventures: IAdventure[] | string = await getAdventures()

  if (Array.isArray(adventures))
    adventures.forEach((item: IAdventure) =>
      IdsArray.push({ params: {id: String(item.id)} }))

  return {
    paths: IdsArray,
    fallback: false,
  }
}

export async function getStaticProps({params}: GetStaticPropsContext) {
  const adventures: IAdventure[] = await getAdventures()

  if (params) {
    const id = params.id
    const adventure: IAdventure[] =
      adventures.filter(item => String(item.id) === id)

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
