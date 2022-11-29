import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" end element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
