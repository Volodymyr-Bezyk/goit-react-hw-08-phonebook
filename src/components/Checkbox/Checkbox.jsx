import { FiStar } from 'react-icons/fi';
import { CheckboxLabel, HideInput } from './Checkbox.styled';

const CheckBox = () => {
  return (
    <CheckboxLabel>
      <HideInput type="checkbox" />
      <FiStar size={20} />
    </CheckboxLabel>
  );
};

export default CheckBox;
