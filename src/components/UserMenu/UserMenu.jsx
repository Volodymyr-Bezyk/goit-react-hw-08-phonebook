import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { Title, LogoutBtn } from './UserMenu.styled';
import Box from 'components/Box';

const UserMenu = () => {
  const { user, isLoggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logout());

  return (
    isLoggedIn && (
      <Box display="flex" alignItems="center">
        <Title> You logged as {user.name}</Title>
        <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
      </Box>
    )
  );
};

export default UserMenu;
