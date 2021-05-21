import styles from './header.module.css'
import PropTypes from 'prop-types'

const PageHeader = ({ heading, subHeading }) => {
  //TODO: could accept these props as functions as well for i18n
  return (
    <header>
      <h1 className={styles.header}>{heading}</h1>
      <p className={styles.find}>{subHeading}</p>
    </header>
  )
}

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
}

export default PageHeader
