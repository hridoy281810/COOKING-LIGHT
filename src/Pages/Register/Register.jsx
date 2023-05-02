import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  // const [error,setError] = useState()
  // const [success,setSuccess] = useState()
  
 const handleRegister = (event)=>{
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;
  createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)

    })
   .catch(error =>{
    console.log(error.message)
   })
 }


 return (
        <div>
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
  <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">Please Register!</h1> </div>
   <form onSubmit={handleRegister}>
   <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
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
   </form>
  </div>
</div>
        </div>
    );
};

export default Register;