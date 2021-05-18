import PropTypes from 'prop-types'
import Checkbox from '../common/checkbox'
import style from './hide.module.css'

const HidePeople = ({ onHide }) => {
  return (
    <Checkbox
      id="hide-people-with-no-image"
      name="hide-image"
      label="Hide people missing a profile image"
      className={style.hidePeople}
      onChange={onHide}
    ></Checkbox>
  )
}

HidePeople.propTypes = {
  onHide: PropTypes.func.isRequired,
}

export default HidePeople
