import style from './style.module.css'
import query from './query.graphql'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import createDataTree from '../../utils/createDataTree'

function PeoplePage({ allPeople, allDepartments }) {
  return (
    <>
      <pre className={style.myData}>{JSON.stringify(allPeople, null, 2)}</pre>
      <pre className={style.myData}>
        {JSON.stringify(allDepartments, null, 2)}
      </pre>
    </>
  )
}

export async function getStaticProps() {
  const data = await rivetQuery({ query })
  //fetch flattened data from graphQL and create a data tree from it
  const departmentsTree = createDataTree(data.allDepartments)
  const transformedData = { ...data, allDepartments: departmentsTree }
  return { props: transformedData }
}

PeoplePage.layout = true

export default PeoplePage
