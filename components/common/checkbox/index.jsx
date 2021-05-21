import styles from './checkbox.module.css'
import Label from '../label'
import PropTypes from 'prop-types'

const Checkbox = ({
  className,
  id,
  label,
  name,
  describedBy,
  onChange,
  ...rest
}) => {
  return (
    <div className={className}>
      <input
        id={id}
        type="checkbox"
        name={name || id}
        aria-describedby={describedBy}
        onChange={onChange}
        {...rest}
      ></input>
      <Label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </Label>
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string,
  describedBy: PropTypes.string,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  describedBy: undefined,
}

export default Checkbox
