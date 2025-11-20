import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#f5ffd8]'>
            <div className="absolute top-7 left-100">
                <Logo ></Logo>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={authImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default AuthLayout;