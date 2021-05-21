import PropTypes from 'prop-types'
const LiveRegion = ({ message }) => {
  return (
    <div role="region" aria-live="polite" className="visually-hidden">
      {message}
    </div>
  )
}

LiveRegion.propTypes = {
  message: PropTypes.string.isRequired,
}
export default LiveRegion
