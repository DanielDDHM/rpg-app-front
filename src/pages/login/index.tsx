import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import request from '../../config/axios';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ok, setOk] = useState(null);

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const login = async (event: any) => {
    event.preventDefault();
    await request({
      url: '/v1/auth/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem(
          'Login Data',
          JSON.stringify({
            email,
            password,
            token: res.data.token,
          }),
        );
        setOk(res.data);
        toast.success('Login With Success', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000,
        });

        setTimeout(() => {
          routeChange('/initial')
        }, 1000);

        return res.data;
      })
      .catch((e) => e.messages);
  };

  useEffect(() => {
    if(localStorage.getItem('Login Data')){
      routeChange('/initial')
    }
  })

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email Or Nick</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email or Nickname"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={async (e) => await login(e)}>
              Submit
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => routeChange('register')}
            >
              Register
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="recover">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
