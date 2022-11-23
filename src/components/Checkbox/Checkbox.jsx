import { FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { CheckboxLabel, HideInput } from './Checkbox.styled';

const CheckBox = ({ onToggleClick, status }) => {
  return (
    <CheckboxLabel>
      <HideInput onChange={onToggleClick} checked={status} type="checkbox" />
      <FiStar size={20} />
    </CheckboxLabel>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
};
