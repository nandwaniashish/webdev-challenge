import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'
import defaultImg from './default.png'

const PeopleList = ({ peopleList = [] }) => {
  if (peopleList.length === 0) {
    return <p className="text-align-center paragraph">No results found</p>
  }
  const employees = peopleList.map((people, idx) => (
    <PeopleListItem
      key={people.id || idx}
      name={people.name}
      title={people.title}
      avatarUrl={people.avatar ? people.avatar.url : defaultImg}
      deptName={people.department.name}
    ></PeopleListItem>
  ))

  return <ul className="employee-list row">{employees}</ul>
}

PeopleList.propTypes = {
  peopleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      avatar: PropTypes.object,
    })
  ).isRequired,
}

export default PeopleList
