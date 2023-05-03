import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import logo1 from '../../assets/img/logo1.png'


const Login = () => {
  const {loginUser,googleLogin,githubLogin}  = useContext(AuthContext);
  
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  const navigate = useNavigate();
  const location = useLocation()

  console.log(location)
  const from =  location.state?.from?.pathname || '/'

  const handleLogin = (event)=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    
    loginUser(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      setSuccess('login successfully')
      navigate(from, {replace: true})
    })
    .catch(error=>{
      const errorM = error.message;
      setError(errorM)

    })
  }
  
   const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
    navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error)
    })
   }
   const handleGithubLogin = ()=>{
    githubLogin()
    .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
    navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error)
    })
   }

    return (
        <div>
        <div className="hero min-h-screen bg-teal-600">
  <div className="hero-content flex-col">
  <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">Please Login!</h1> </div>
   <form onSubmit={handleLogin}>
   <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
      
<div className='flex justify-center shadow rounded border-2 mb-4 border-orange-600'>          <Link to='/' className=" normal-case text-2xl font-semibold text-orange-600 md:flex items-center ">
            <img style={{width:'70px'}} src={logo1} alt="" /> COOKING LIGHT </Link></div>
    
        
        <div className="form-control">
          <input style={{width: '400px'}}  type="text" name='email' placeholder="email" className="input mb-4  input-bordered " />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" name='password' className="input input-bordered mb-4"  required/>
        </div>
        <p>{error}</p>
        <p>{success}</p>
        <p>
        Don't Have an Account? 
            <Link to='/register' className="text-primary"> Register </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-4">Login</button>
        </div>
        <div className='flex flex-col justify-center gap-4 '>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary"> <span className='text-2xl me-3'><FaGoogle ></FaGoogle></span> Login With Google</button> 
      <button onClick={handleGithubLogin} className="btn btn-outline"> <span  className='text-2xl me-3'><FaGithub></FaGithub></span> Login With gitHub</button> 
        </div>
      </div>
    </div>
   </form>
  </div>
</div>
<hr />
        </div>
    );
};

export default Login;