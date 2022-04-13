//** components
import {MainContent, MainLayout } from "../../layout"

interface Props {
  title: string
}

const Adventures = ({title}: Props) => {

  return (
    <MainLayout title={title} >
      <MainContent
        content={
          <div>Adventures</div>
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
