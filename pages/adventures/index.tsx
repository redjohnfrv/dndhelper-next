//** components
import {
  AdvContent,
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  title: string
}

const Adventures = ({title}: Props) => {

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <AdvContent />
        }
      />
    </MainLayout>
  )
}

export default Adventures

export async function getStaticProps() {
  return {
    props: {
      title: 'All the Adventures',
    },
  }
}
