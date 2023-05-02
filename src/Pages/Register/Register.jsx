import React from 'react';

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
          <input type="text" placeholder="password" name='password' className="input input-bordered"  required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
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

export default Register;