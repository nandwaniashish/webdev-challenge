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
  TreeView,
} from '../../components'

function PeoplePage({ allPeople, allDepartments }) {
  //TODO: switch to class component or use `useCallback` for performance
  const [searchTerm, setSearchTerm] = useState('')
  const [hideMissingImagePeople, setHideMissingImagePeople] = useState(false)
  const [activeNode, setActiveNode] = useState(null)
  const [expandedNodes, setExpandedNodes] = useState({})

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  const hidePeopleWithNoImage = (event) => {
    setHideMissingImagePeople(event.target.checked)
  }

  const onNodeSelect = (event, node) => {
    setActiveNode(node)
  }

  const onToggle = (node) => {
    if (expandedNodes[node.id]) {
      expandedNodes[node.id] = !expandedNodes[node.id]
    } else {
      expandedNodes[node.id] = true
    }
    console.log(expandedNodes, 'nodes')
    setExpandedNodes({ ...expandedNodes })
  }

  //TODO: Pass these filters over to the PeopleList component
  //TODO: Export the filters for testing
  let filteredEmployeesList = allPeople.filter((people) => {
    return people.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  //Filters could be applied on other existing filters
  if (hideMissingImagePeople) {
    filteredEmployeesList = filteredEmployeesList.filter((people) => {
      return people.avatar
    })
  }
  // Filter people based on the active selection
  if (activeNode && activeNode.id) {
    filteredEmployeesList = filteredEmployeesList.filter((people) => {
      return people.department.id === activeNode.id
    })
  }
  return (
    //TODO: pull content from a separate localized file
    <section className={`${styles.people} g-container row`}>
      <form className={`${styles.searchForm} row`} role="search">
        <PageHeader
          heading="HashiCorp Humans"
          subHeading="Find a HashiCorp human"
        ></PageHeader>
        <LiveRegion
          message={` People List has ${filteredEmployeesList.length} people`}
        />
        <PeopleSearch onSearch={handleSearchTerm} searchTerm={searchTerm} />
        <HidePeople onHide={hidePeopleWithNoImage}></HidePeople>
      </form>
      <aside
        className={`${styles.departmentFilter} ${styles.sticky}`}
        id="department-filter"
      >
        <h2>Filter by department</h2>
        <TreeView
          rootNodes={allDepartments}
          activeNode={activeNode}
          onToggle={onToggle}
          onSelect={onNodeSelect}
          expandedNodes={expandedNodes}
        ></TreeView>
      </aside>
      <section className={`${styles.searchResults} column`} id="search-results">
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
