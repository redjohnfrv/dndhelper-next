import {GetStaticPropsContext} from 'next/types'

//** utils
import {IModule} from '../../dto/module'
import {modulesApi} from '../../redux/modules/api'
import {useEffect} from 'react'
import {useAppDispatch} from '../../hooks'
import {modulesActions, modulesSelector} from '../../redux/modules'
import {useSelector} from 'react-redux'

//** components
import {
  MainContent,
  MainLayout,
  Module
} from '../../layout'

interface Props {
  moduleId: string
  module: IModule[]
}

const ModuleId = ({moduleId}: Props) => {
  const dispatch = useAppDispatch()
  const module = useSelector(modulesSelector.selectModuleById(moduleId))

  /** just getting modules **/
  useEffect(() => {
    dispatch(modulesActions.getModules())
  }, [])

  return (
    <MainLayout title={`Module ${moduleId}`}>
      <MainContent
        content={
          <Module module={module} />
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

  const modules: IModule[] | string = await modulesApi.getModules()
    .then(res => res.data)

  if (Array.isArray(modules))
    modules.forEach((item: IModule) =>
      IdsArray.push({params: {id: String(item.id)}}))

  return {
    paths: IdsArray,
    fallback: false,
  }
}

export async function getStaticProps({params}: GetStaticPropsContext) {

  if (params) {
    const id = params.id

    return {
      props: {
        moduleId: id,
      },
    }
  }

  return {
    notFound: true,
  }
}
