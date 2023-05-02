import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
    return (
      <nav className='container'>
          <div className=" py-4 px3 navbar bg-base-100">
        <div className="flex-1 grow">
          <Link to='/' className=" normal-case text-xl">BD-RECIPE</Link>
        <div>
      
        </div>
        </div>
        <div className="flex-none">
       <div  className='me-5'>
       <NavLink to='/'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
       </div>
       <div  className='me-5'>
       <NavLink to='/blog'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
       </div> 
        {
          user && <><img className='me-8' style={{height: '50px', width: '50px' , borderRadius: '50%'}} src="" alt="" /></>
        }
       {
        user ? <><button  className="btn btn-primary">Logout</button></> : 
        <Link to='/login' className="btn btn-primary">Login</Link>
       }  
        </div>
      </div>
      </nav>
    );
};

export default Header;