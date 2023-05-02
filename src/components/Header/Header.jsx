import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className='container'>
          <div className=" py-4 px3 navbar bg-base-100">
        <div className="flex-1 grow">
          <Link className=" normal-case text-xl">BD-RECIPE</Link>
        <div>
      
        </div>
        </div>
        <div className="flex-none">
        <Link className='me-5'>Home</Link>
        <Link className='me-5'>Blog</Link>
        <button className="btn btn-primary">Login</button>
        </div>
      </div>
      </nav>
    );
};

export default Header;