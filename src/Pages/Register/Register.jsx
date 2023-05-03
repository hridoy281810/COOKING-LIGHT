import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo1 from '../../assets/img/logo1.png'

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  
 const handleRegister = (event)=>{
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;
  setError('')
  setSuccess('')

  if (password.length < 6(password)) {
    setError("password not valid need 6 char ");
    return;
  }
  createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
      setSuccess('your account create successfully')

    })
   .catch(error =>{
    const errorM = error.message;
    setError(errorM)
   })
 }


 return (
        <div>
        
        <div className="hero min-h-screen bg-teal-600">
  <div className="hero-content flex-col">
  <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">Please Register!</h1> </div>
   <form onSubmit={handleRegister}>
   <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
      <div className='flex justify-center shadow rounded border-2 mb-4 border-orange-600 '>          <Link to='/' className="  normal-case text-2xl font-semibold text-orange-600 md:flex items-center ">
            <img style={{width:'70px'}} src={logo1} alt="" /> COOKING LIGHT </Link></div>
        <div className="form-control">
          <input  type="text" name='name' placeholder="name" className="input input-bordered mb-4" required/>
        </div>
        <div className="form-control">
          <input style={{width: '400px'}}  type="text" name='email' placeholder="email" className="input mb-4 input-bordered " />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" name='password' className="input input-bordered mb-4"  required/>
        </div>
        <div className="form-control">
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered mb-4"  required/>
        
        </div>
        <p className='text-red-700'>{error}</p>
        <p className='text-green-700'>{success}</p>
        <p>
          Already Have an Account? 
            <Link to='/login' className="text-primary"> Login </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">{success ? <><Link to='/'>Register</Link></>: 'Register'}</button>
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

export default Register;