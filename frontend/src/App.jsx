import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ContextApi } from "./context/ContextApi";

import { Login, Signup } from './pages';
import { Home, Navbar, Welcome } from './components';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { server } from './main';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(ContextApi);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

const App = () => {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(ContextApi);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const response = await axios.get(`${server}/users/profile`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (error) {
        setUser({});
        setIsAuthenticated(false);
      }
    };

    // Check user authentication when the app starts
    checkUserAuthentication();
  }, [setIsAuthenticated, setUser]);



  return (
    <div className='Notes_App'>
      <Router>
        <Navbar color={isAuthenticated ? '#242424' : 'transparent'} />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home/*' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App