import React from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.css'

export function Home() {
    return (
        <div className={s.container}>
            <h1>Hola mundo </h1>
            <Link to='/login'>
                <button className={s.button}>Login</button>
            </Link>
            <Link to="/signup">
                <button className={s.button}>Sign Up</button>
            </Link>
        </div>
    )
}