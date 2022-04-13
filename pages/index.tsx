//** components
import {MainContent, MainLayout} from '../layout'

interface Props {
  title: string
}

const Home = ({title}: Props) => {

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <div>Home page content</div>
        }
      />
    </MainLayout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      title: 'D&D Adventure helper',
    },
  }
}
