import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
  <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">Please Register!</h1> </div>
    <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input  type="text" name='name' placeholder="name" className="input input-bordered mb-4" required/>
        </div>
        <div className="form-control">
          <input style={{width: '400px'}}  type="text" name='email' placeholder="email" className="input mb-4 input-bordered " />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" name='password' className="input input-bordered mb-4"  required/>
        </div>
        <div className="form-control">
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered mb-4"  required/>
        
        </div>
        <p></p>
        <p>
          Already Have an Account? 
            <Link to='/login' className="text-primary"> Login </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;