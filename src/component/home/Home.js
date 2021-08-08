import React from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.css'

export function Home() {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <h1>Hola</h1>
                <Link to='/login'>
                    <button className={s.button}>Login</button>
                </Link>
                <Link to='/singup'>
                    <button className={s.button}>Sing Up</button>
                </Link>
            </div>
        </main>
    )
}