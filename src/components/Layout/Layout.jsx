import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';
import { selectLoadingStatus } from 'redux/selectors';

import UserMenu from 'components/UserMenu';
import { Wrapper, Navigation, Link } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const isLoading = useSelector(selectLoadingStatus);
  const showLoader = isRefreshing || isLoading;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Wrapper>
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
        {showLoader && <BarLoader color="#b4c5ee" height={10} width={'100%'} />}
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
