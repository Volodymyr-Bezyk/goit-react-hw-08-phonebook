import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Wrapper, Navigation, Link } from './Layout.styled';
import { selectAuth } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu';

const Layout = () => {
  const { isLoggedIn } = useSelector(selectAuth);

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
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
