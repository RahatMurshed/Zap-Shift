import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
        <div className='flex items-end'>
            <img className='w-6' src={logo} alt="" />
            <h3 className='tetx-3xl font-bold -ms-2'>ZapShift</h3>
        </div>
        </Link>
    );
};

export default Logo;