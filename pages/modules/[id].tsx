import {GetStaticPropsContext} from 'next/types'

//** utils
import {IModule} from '../../dto/module'
import {getModules} from '../../api/modules'

//** components
import {
  MainContent,
  MainLayout
} from '../../layout'

interface Props {
  moduleId: string
  module: IModule
}

const ModuleId = ({moduleId, module}: Props) => {

  return (
    <MainLayout title={`Module ${moduleId}`}>
      <MainContent
        content={
          <div>moduleeee!</div>
        }
      />
    </MainLayout>
  )
}

export default ModuleId

interface Ids {
  params: {
    id: string
  }
}

export async function getStaticPaths() {
  const IdsArray: Ids[] = []

  const modules: IModule[] | string = await getModules()

  if (Array.isArray(modules))
    modules.forEach((item: IModule) =>
      IdsArray.push({params: {id: String(item.id)}}))

  return {
    paths: IdsArray,
    fallback: false,
  }
}

export async function getStaticProps({params}: GetStaticPropsContext) {
  const modules: IModule[] = await getModules()

  if (params) {
    const id = params.id
    const module: IModule[] = modules.filter(item => String(item.id) === id)

    return {
      props: {
        advId: id,
        module,
      },
    }
  }

  return {
    notFound: true,
  }
}
