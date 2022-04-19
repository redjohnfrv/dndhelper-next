//** utils
import {useSwitcher} from '../../hooks/useSwitcher'

//** components
import {
  CreateAdventure,
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  title: string
}

const NewAdventure = ({title}: Props) => {

  const isCreating = useSwitcher(true)

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <CreateAdventure />
        }
      />
    </MainLayout>
  )
}

export default NewAdventure

export async function getStaticProps() {
  return {
    props: {
      title: 'Preparing to a New Adventure!',
    },
  }
}
