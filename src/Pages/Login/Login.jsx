import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
  <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">Please Login!</h1> </div>
    <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input style={{width: '400px'}}  type="text" name='email' placeholder="email" className="input mb-4 mt-4 input-bordered " />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" name='password' className="input input-bordered mb-4"  required/>
        </div>
        <p></p>
        <p>
        Don't Have an Account? 
            <Link to='/register' className="text-primary"> Register </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;