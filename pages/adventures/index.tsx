import {useEffect} from 'react'
import {useSelector} from 'react-redux'

//** utils
import {IAdventure, IAdventuresState} from '../../dto/adventure'
import {useAppDispatch} from '../../hooks'
import {adventuresActions, adventuresSelector} from '../../redux/adventures'
import {adventuresApi} from '../../redux/adventures/api'

//** components
import {
  AdvsContent,
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  title: string
  adventures: IAdventure[] | string
  error?: string
}

const Adventures = ({title, adventures, error}: Props) => {
  const adventuresState = useSelector(adventuresSelector.selectAdventures)
  const dispatch = useAppDispatch()

  /** if getStaticProps request failed
   * (actually no, just getting adventures to store) **/
  useEffect(() => {
    dispatch(adventuresActions.getAdventures())
    if (error) console.log('Error: ', error)
  }, [])

  /** removing the adventure by id **/
  const removeAdventureHandler = (id: string) => {
    dispatch(adventuresActions.deleteAdventure(id))
      .then(() => dispatch(adventuresActions.getAdventures()))
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
  try {
    const response = await adventuresApi.getAdventures()
    let adventures: IAdventuresState = await response.data
    return {
      props: {
        adventures,
      }
    }
  }
  catch (err: any) {
    return {
      props: {
        adventures: [],
        error: 'Connection error ...',
      }
    }
  }
}
