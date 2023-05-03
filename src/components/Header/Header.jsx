import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo1 from '../../assets/img/logo1.png';
import './Header.css';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  }
  const dropdownStyle = {
    display: showDetails ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    right: '-100%',
    backgroundColor: '#fff',
    padding: '1rem',
    border: '2px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    borderRadius:'20px'
  }


  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error.message)
    })
  }

    return (
   <>
      <nav className='container'>
          <div className=" header-res py-4 px3 navbar bg-base-100">
        <div className="md:flex-1 grow header-logo">
          <Link to='/' className=" header-logo-p normal-case text-2xl font-semibold text-orange-600 md:flex items-center ">
            <img style={{width:'70px'}} src={logo1} alt="" /> COOKING LIGHT </Link>
      
        </div>
        <div className="flex-none">
       <div  className='me-5 text-xl'>
       <NavLink to='/'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
       </div>
       <div  className='me-5 text-xl'>
       <NavLink to='/blog'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
       </div> 
        {
        user && <><div style={{ position: 'relative' }} title={user?.displayName} > <img 
      
        onClick={handleClick}
        className='me-8' style={{height: '50px', width: '50px' , borderRadius: '50%', cursor: 'pointer'}} src={user?.photoURL}  alt="User Profile" /> 
  
      {
        user &&  <div style={dropdownStyle}>
       <div className='flex justify-center items-center flex-col'>
       <img className='w-20 rounded-full' src={user?.photoURL} alt="" />
        <p className='font-semibold'>{user?.displayName}</p>
        <p className='font-semibold'>{user?.email}</p>
        <Link to='/profile' className="btn btn-sm">User Details</Link>
       </div>
      </div>
      }
        </div></>
        }
       {
        user ? <><button onClick={handleLogOut}  className="btn btn-primary">Logout</button></> : 
        <Link to='/login' className="btn btn-primary">Login</Link>
       }  
        </div>
      </div>
      </nav>
     
   </>
    );
};

export default Header;