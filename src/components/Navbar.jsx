import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-5 text-accent">
                <NavLink className="px-1 py-2" to='/'>Home</NavLink>
                <NavLink className="px-1 py-2" to='/About'>About</NavLink>
                <NavLink className="px-1 py-2" to='/Career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={user} alt="user icon" />
                <button className="btn btn-primary px-10">Login</button>
            </div>
        </div>
    );
};

export default Navbar;