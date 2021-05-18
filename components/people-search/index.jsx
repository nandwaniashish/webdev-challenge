import Input from '../common/input'
import styles from './search.module.css'
import PropTypes from 'prop-types'
import icon from './search.svg'

const EmployeeSearch = ({ onSearch, searchTerm }) => {
  return (
    <div>
      <Input
        type="search"
        id="search"
        label="Search people by name"
        name="search-people"
        placeholder="Search people by name"
        className={`text-align-center ${styles.search}`}
        onChange={onSearch}
        value={searchTerm}
        visuallyHideLabel={true}
        icon={icon}
      ></Input>
    </div>
  )
}

EmployeeSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default EmployeeSearch
