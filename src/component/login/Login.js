import React, { useState } from 'react';

export function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h1>Login</h1>
            <div>
                <input value={user} onChange={(e) => setUser(e.target.value)} />
                <label>Usuario</label>
            </div>
            <div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <label> Contrasena</label>
            </div>
            <button>Ingresar</button>
        </form>
    )
}