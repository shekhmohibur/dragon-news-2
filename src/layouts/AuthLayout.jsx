import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-5'>
                <NavBar/>
            </header>
            <main className='w-11/12 mx-auto mt-10'>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;