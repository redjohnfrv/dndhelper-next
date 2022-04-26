import {useEffect, useState} from 'react'

//** utils
import {ICreature} from '../../dto/creature'
import {getCreatures} from '../../api/creatures'

//** components
import {
  CreaturesContent,
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  title: string
  creatures: ICreature[] | string
}

const Creatures = ({title, creatures}: Props) => {
  const [mobs, setMobs] = useState<ICreature[] | string>(creatures)

  /** if getStaticProps request hadn't executed **/
  useEffect(() => {
    if (Array.isArray(mobs) && mobs.length < 1) {
      getCreatures()
        .then((res: ICreature[] | string) => setMobs(res))
    }
  }, [mobs])

  // /** removing the adventure by id **/
  // const removeAdventureHandler = (id: string) => {
  //   deleteAdventure(id)
  //     .then(() => {
  //       getAdventures()
  //         .then((res: IAdventure[] | string) => setAdvs(res))
  //   })
  // }

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <CreaturesContent creatures={mobs}  />
        }
      />
    </MainLayout>
  )
}

export default Creatures

export async function getStaticProps() {
  const creatures: ICreature[] | string = []
  let error = ''

  await getCreatures().then(res => {
    typeof res !== 'string'
      ? (res as ICreature[]).map((item: ICreature) => creatures.push(item))
      : error = res
  })

  return {
    props: {
      title: 'All the Adventures',
      creatures: error || creatures,
    },
  }
}
