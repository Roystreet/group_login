import React from 'react';
import {Link} from 'react-router-dom';
import s from './header.module.css'

 function Header() {
    return (
        <header className={s.container}>
            <img alt='logo'/>
        <nav>
            <Link to='/login'> Login</Link>
            <Link to='/signup'> SignUp</Link>
       </nav>
        </header>
    )
}

export default Header;