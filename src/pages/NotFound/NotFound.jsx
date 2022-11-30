import { Title, RedirectBtn } from './NotFound.styled';
import { useNavigate } from 'react-router-dom';
import Box from 'components/Box';

const NotFound = () => {
  const navigate = useNavigate();

  const redirectHandler = () => navigate('/', { replace: true });

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Title>Looks like this page doesn`t exist. If you want go to home page please click</Title>
      <RedirectBtn onClick={redirectHandler}>Go to HomePage</RedirectBtn>
    </Box>
  );
};

export default NotFound;
