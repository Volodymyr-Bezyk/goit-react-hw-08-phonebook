import Box from 'components/Box';
import { Label, Input } from './FieldInput.styled';

const FieldInput = ({
  children,
  title,
  inputHandler,
  value,
  type,
  name,
  pattern,
  hint,
  ...rest
}) => {
  return (
    <Label>
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <p>{title}</p>
        {children}
      </Box>
      <Input
        onChange={inputHandler}
        value={value}
        type={type}
        name={name}
        pattern={pattern}
        title={hint}
        {...rest}
      />
    </Label>
  );
};

export default FieldInput;
