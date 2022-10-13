import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Label, Input, ErrorMessage } from './FieldInput.styled';

const FieldInput = ({ title, type, name }) => {
  return (
    <Label>
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <p>{title}</p>
      </Box>
      <Input type={type} name={name} />
      <ErrorMessage name={name} component="p"></ErrorMessage>
    </Label>
  );
};

export default FieldInput;

FieldInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
