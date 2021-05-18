import Label from '../label'
import styles from './input.module.css'
import PropTypes from 'prop-types'

const Input = ({
  className,
  id,
  type,
  name,
  label,
  describedBy,
  onChange,
  visuallyHideLabel,
  onBlur,
  icon,
  ...rest
}) => {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        className={visuallyHideLabel === true ? styles.visuallyHidden : ''}
      >
        {label}
      </Label>
      <input
        id={id}
        type={type || 'text'}
        name={name || id}
        style={{ backgroundImage: `url(${icon})` }}
        aria-describedby={describedBy}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      ></input>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string,
  visuallyHideLabel: PropTypes.bool,
  describedBy: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  type: 'text',
  value: 'undefined',
  onChange: () => {},
  onBlur: () => {},
  describedBy: undefined,
}

export default Input
