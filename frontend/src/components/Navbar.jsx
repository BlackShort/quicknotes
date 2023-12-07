
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../context/ContextApi';
import { Logout } from '../context/NotesFunction';

const Navbar = ({ color }) => {

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, user } = useContext(ContextApi);

  const handleLogout = async () => {
    await Logout(setIsAuthenticated);
    navigate('/login');
  };
  return (
    <div className='App_Navbar' style={{ background: color }}>
      <Link to={isAuthenticated ? "/home" : "/"}>
        <h2 className="logo">QuickNotes</h2>
      </Link>
      <nav className="navigation">
        {
          isAuthenticated ? (
            <>
              <p className='username'>{user.name}</p>
              <button type='button' onClick={handleLogout} className="login-button">Logout</button>
            </>
          ) : (
            <>
              <Link to={"/login"}><button className="login-button">Login</button></Link>
              <Link to={"/signup"}><button className="login-button">Signup</button></Link>
            </>
          )
        }
      </nav>
    </div>
  )
}

export default Navbar;