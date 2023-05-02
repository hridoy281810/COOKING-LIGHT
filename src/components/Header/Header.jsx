import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo1 from '../../assets/img/logo1.png'

const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error.message)
    })
  }

    return (
      <nav className='container'>
          <div className=" py-4 px3 navbar bg-base-100">
        <div className="flex-1 grow">
          <Link to='/' className=" normal-case text-2xl font-semibold text-orange-600 md:flex items-center ">
            <img style={{width:'70px'}} src={logo1} alt="" /> COOKING LIGHT </Link>
        <div>
      
        </div>
        </div>
        <div className="flex-none">
       <div  className='me-5 text-xl'>
       <NavLink to='/'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
       </div>
       <div  className='me-5 text-xl'>
       <NavLink to='/blog'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
       </div> 
        {
        user && <><Link title={user?.displayName} ><img  className='me-8' style={{height: '50px', width: '50px' , borderRadius: '50%'}} src={user?.photoURL} alt="" /></Link></>
        }
       {
        user ? <><button onClick={handleLogOut}  className="btn btn-primary">Logout</button></> : 
        <Link to='/login' className="btn btn-primary">Login</Link>
       }  
        </div>
      </div>
      </nav>
    );
};

export default Header;