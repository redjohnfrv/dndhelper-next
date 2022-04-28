import {useEffect} from 'react'
import {useSelector} from 'react-redux'

//** utils
import {IAdventure, IAdventuresState} from '../../dto/adventure'
import {useAppDispatch} from '../../hooks'

//** components
import {
  AdvsContent,
  MainContent,
  MainLayout
} from '../../layout'
import {adventuresSelector} from '../../redux/adventures'
import {selectAdventures} from '../../redux/adventures/selector'
import {adventuresApi} from '../../redux/adventures/api'

interface Props {
  title: string
  adventures: IAdventure[] | string
  error?: string
}

const Adventures = ({title, adventures, error}: Props) => {
  const adventuresState = useSelector(adventuresSelector.selectAdventures)

  /** if getStaticProps request failed **/
  useEffect(() => {
    if (error) console.log('Error: ', error)
  }, [])

  /** removing the adventure by id **/
  const removeAdventureHandler = (id: string) => {
    // adventuresApi.deleteAdventure(id)
    //   .then(() => {
    //     adventuresApi.getAdventures()
    //       .then(res => dispatch(setAdventuresStore(res.data as IAdventure[] | [])))
    //       .catch(err => dispatch(setAdventuresStore([])))
    // })
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
  // let error = ''
  //
  // const request = await adventuresApi.getAdventures()
  //   .then((res) => res.data as IAdventure[] | [])
  //   .catch(err => error = err.message)
  //
  // return {
  //   props: {
  //     title: 'All the Adventures',
  //     adventures: error || request,
  //   },
  // }
  try {
    const response = await adventuresApi.getAdventures()
    let initProducts: IAdventuresState = await response.data
    return {
      props: {
        initProducts,
      }
    }
  }
  catch (err: any) {
    return {
      props: {
        initProducts: [],
        error: 'Connection error ...',
      }
    }
  }
}
