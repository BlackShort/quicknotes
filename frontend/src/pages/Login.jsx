import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ContextApi } from '../context/ContextApi';

const Login = () => {

  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(ContextApi);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberme: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  useEffect(() => {
    // Check if the user is already authenticated from localStorage
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      setIsAuthenticated(true);
      navigate('/home');
    }
  }, [setIsAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/users/login`, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.status >= 200 && response.status < 300) {
        loginData.email = loginData.password = "";
        loginData.rememberme = false;
        setIsAuthenticated(true);
        toast.success(response.data.message);

        // Save authentication state to localStorage
        localStorage.setItem("isAuthenticated", "true");
        navigate('/home');
      }
    } catch (error) {
      navigate('/login');
      setIsAuthenticated(false);
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#" onSubmit={handleLogin}>
          <div className="input-box">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder=""
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" /></svg>            </span>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
              placeholder=""
              autoComplete="off"
            />
            <label id="password" htmlFor="">Password</label>
          </div>

          <div className="remember-forget">
            <label htmlFor="rememberme">
              <input
                type="checkbox"
                id="rememberme"
                name="rememberme"
                checked={loginData.rememberme}
                onChange={handleInputChange}
              />
              Remember me
            </label>
            <Link to="/login">Forget Password</Link>
          </div>

          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account?
              <Link to={"/signup"} className="register-link">Register</Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login