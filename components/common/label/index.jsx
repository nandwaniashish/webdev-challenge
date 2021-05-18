import PropTypes from 'prop-types'

const Label = ({ htmlFor, children, ...rest }) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default Label
