import {useRouter} from 'next/router'
import {NextPageContext} from 'next/types'

//** components
import {MainContent, MainLayout} from '../../layout'

interface Props {
  adv: any
  title: string
}

const Adventure = ({adv, title}: Props) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <div>Adventure {id}</div>
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

export async function getServerSideProps({query}: NextPageContextExt) {
  const {id} = query

  return {
    props: {
      adv: 'adventure xxx',
      title: `adventure ${id}`
    },
  }
}
