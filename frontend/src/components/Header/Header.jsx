import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const userData = JSON.parse(user);
            setIsLoggedIn(true);
            setUserName(userData.username);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserName('');
    };

    return (
        <div className='header'>
            <NavLink to='/' className='logo'>Home</NavLink>
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <>
                        <NavLink to='/' className='link'>Welcome back, {userName} </NavLink>
                        <NavLink to='/pwmanager' className='link'>View Password</NavLink>
                        <NavLink to='/' className='link' onClick={handleLogout}>Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='/login' className='link'>Log In</NavLink>
                        <NavLink to='/signup' className='link'>Sign Up</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
