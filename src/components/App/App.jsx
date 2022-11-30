import { Routes, Route } from 'react-router-dom';
import lazy from 'react';
import { PrivateRoute, RestrictedRoute } from 'routes';
import Layout from 'components/Layout';

import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

// const Home = lazy(() => import('pages/Home'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const NotFound = lazy(() => import('pages/NotFound'));

const App = () => (
  <Routes>
    <Route path="/" end element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route
        path="contacts"
        element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
      />
      <Route
        path="register"
        element={<RestrictedRoute component={<Register />} redirectTo="/contacts" />}
      />
      <Route
        path="login"
        element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
