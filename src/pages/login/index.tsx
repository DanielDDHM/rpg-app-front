import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" className="form-control mt-1" placeholder="Enter email" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" placeholder="Enter password" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
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
