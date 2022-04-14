import {useEffect, useState} from 'react'

//** utils
import {IAdventure} from '../../dto/adventure'
import {getAdventures} from '../../api/adventures'

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

  /** if getStaticProps request hadn't executed **/
  useEffect(() => {
    if (Array.isArray(advs) && advs.length < 1) {
      getAdventures()
        .then((res: IAdventure[] | string) => setAdvs(res))
    }
  }, [advs])

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <AdvsContent adventures={advs} />
        }
      />
    </MainLayout>
  )
}

export default Adventures

export async function getStaticProps() {
  const advs: IAdventure[] | string = []
  let error = ''

  await getAdventures().then(res => {
    typeof res !== 'string'
      ? (res as IAdventure[]).map((item: IAdventure) => advs.push(item))
      : error = res
  })

  return {
    props: {
      title: 'All the Adventures',
      adventures: error || advs,
    },
  }
}
