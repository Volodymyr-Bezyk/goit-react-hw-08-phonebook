import { Label, Input } from 'components/Filter/Filter.styled';

const FieldInput = ({
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
      <p>{title}</p>
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
