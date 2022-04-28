import {useEffect} from 'react'
import {useSelector} from 'react-redux'

//** utils
import {IAdventure} from '../../dto/adventure'
import {adventuresApi} from '../../redux/adventures/api'
import {setAdventuresStore} from '../../redux/adventures/slice'
import {selectAdventures} from '../../redux/adventures/selector'
import {useAppDispatch, useSwitcher} from '../../hooks'

//** components
import {
  AdvsContent,
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  title: string
  adventures: IAdventure[] | string
}

const Adventures = ({title, adventures}: Props) => {
  const dispatch = useAppDispatch()
  const adventuresState = useSelector(selectAdventures)
  const isDeleting = useSwitcher()

  /** if getStaticProps request failed **/
  useEffect(() => {
    adventuresApi.getAdventures()
      .then(res => dispatch(setAdventuresStore(res.data as IAdventure[] | [])))
      .catch(err => dispatch(setAdventuresStore([])))
  }, [])

  /** removing the adventure by id **/
  const removeAdventureHandler = (id: string) => {
    adventuresApi.deleteAdventure(id)
      .then(() => {
        adventuresApi.getAdventures()
          .then(res => dispatch(setAdventuresStore(res.data as IAdventure[] | [])))
          .catch(err => dispatch(setAdventuresStore([])))
    })
  }

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <AdvsContent
            adventures={adventuresState}
            onDelete={removeAdventureHandler}
          />
        }
      />
    </MainLayout>
  )
}

export default Adventures

export async function getStaticProps() {
  let error = ''

  const request = await adventuresApi.getAdventures()
    .then((res) => res.data as IAdventure[] | [])
    .catch(err => error = err.message)

  return {
    props: {
      title: 'All the Adventures',
      adventures: error || request,
    },
  }
}
