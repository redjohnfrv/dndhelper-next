import {useRouter} from 'next/router'
import {NextPageContext} from 'next/types'

//** components
import {
  MainContent,
  MainLayout,
  AdvContent
} from '../../layout'

interface Props {
  title: string
}

const Adventure = ({title}: Props) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <AdvContent id={id as string} />
        }
      />
    </MainLayout>
  )
}

export default Adventure

interface NextPageContextExt extends NextPageContext {
  query: {
    id: string
  }
}

export async function getStaticProps({query}: NextPageContextExt) {
  const {id} = query

  return {
    props: {
      title: `Adventure ${id}`
    },
  }
}
