import {GetStaticPropsContext} from 'next/types'
import {useSelector} from 'react-redux'

//** utils
import {IAdventure} from '../../dto/adventure'
import {getAdventures} from '../../api/adventures'
import {selectAdventureById} from '../../redux/adventures/selector'

//** components
import {
  MainContent,
  MainLayout,
  Adventure,
} from '../../layout'

interface Props {
  advId: string
  error: string
}

const AdventureId = ({advId, error}: Props) => {
  const adventure = useSelector(selectAdventureById(advId))

  return (
    <MainLayout title={`Adventure ${advId}`}>
      <MainContent content={
        <Adventure adventure={adventure} />
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
  if (params) {
      const id = params.id

      return {
        props: {
          advId: id,
        }
    }
  }

  return {
    notFound: true,
  }
}
