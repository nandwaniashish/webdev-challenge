import { useState } from 'react'
import styles from './style.module.css'
import query from './query.graphql'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import { createDataTree } from '../../utils'
import {
  PageHeader,
  PeopleSearch,
  HidePeople,
  PeopleList,
  LiveRegion,
} from '../../components'

function PeoplePage({ allPeople }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [hideMissingImagePeople, setHideMissingImagePeople] = useState(false)

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const hidePeopleWithNoImage = (event) => {
    setHideMissingImagePeople(event.target.checked)
  }

  //TODO: Pass these filters over to the PeopleList component
  //TODO: Export the filters for testing
  let filteredEmployeesList = allPeople.filter((people) => {
    return people.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  if (hideMissingImagePeople) {
    filteredEmployeesList = filteredEmployeesList.filter((people) => {
      return people.avatar
    })
  }
  return (
    //TODO: pull content from a separate localized file
    <section className={`${styles.people} row`}>
      <section className={`${styles.searchForm} row`}>
        <PageHeader
          heading="HashiCorp Humans"
          subHeading="Find a HashiCorp human"
        ></PageHeader>
        <LiveRegion
          message={` People List has ${filteredEmployeesList.length} people`}
        />
        <PeopleSearch onSearch={handleSearchTerm} searchTerm={searchTerm} />
        <HidePeople onHide={hidePeopleWithNoImage}></HidePeople>
      </section>
      {/* <aside></aside> */}
      <section className="column" id="search-results">
        <h2 className="visually-hidden">Search Results</h2>
        <PeopleList peopleList={filteredEmployeesList}></PeopleList>
      </section>
    </section>
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
