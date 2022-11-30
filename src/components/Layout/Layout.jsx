import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Box from 'components/Box';

import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

import UserMenu from 'components/UserMenu';
import { Wrapper, Navigation, Link } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Wrapper>
      {isRefreshing ? (
        <Box display="flex" justifyContent="center">
          <RingLoader color="#2738d0" size={80} speedMultiplier={1} />
        </Box>
      ) : (
        <>
          <header>
            <Navigation>
              <div>
                <Link to="/" end>
                  Home
                </Link>
                {isLoggedIn && (
                  <Link to="/contacts" end>
                    Contacts
                  </Link>
                )}
              </div>
              <div>
                {!isLoggedIn && <Link to="/register">Register</Link>}
                {!isLoggedIn && <Link to="/login">Login</Link>}
                <UserMenu />
              </div>
            </Navigation>
          </header>

          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Wrapper>
  );
};

export default Layout;
