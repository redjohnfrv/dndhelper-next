import {useEffect, useState} from 'react'

//** utils
import {IAdventure} from '../../dto/adventure'
import {deleteAdventure, getAdventures} from '../../api/adventures'
import {adventuresApi} from '../../redux/adventure/api'

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
  const [advs, setAdvs] = useState<IAdventure[] | string>(adventures)

  /** if getStaticProps request failed **/
  useEffect(() => {
    if (typeof advs === 'string')
      adventuresApi.getAdventures()
        .then(res => setAdvs(res.data as IAdventure[] | []))
        .catch(err => {
          setAdvs([])
          console.log(err)
        })
  }, [advs])

  /** removing the adventure by id **/
  const removeAdventureHandler = (id: string) => {
    deleteAdventure(id)
      .then(() => {
        getAdventures()
          .then((res: IAdventure[] | string) => setAdvs(res))
    })
  }

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <AdvsContent
            adventures={advs}
            onDelete={removeAdventureHandler}
          />
        }
      />
    </MainLayout>
  )
}

export default Adventures

export async function getStaticProps() {
  let error = 'error'

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
