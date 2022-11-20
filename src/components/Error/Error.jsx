import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { ErrorWrap } from './Error.styled';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <ErrorWrap>
      Something went wrong. We could not find your contacts. Please reload the
      page and try again.
      <p>{error}</p>
    </ErrorWrap>
  );
};

export default Error;
