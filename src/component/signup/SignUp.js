import React, { useState } from 'react';

export function SignUp() {
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmarcontrasena, setConfirmarContrasena] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setUsuario("")
        setContrasena("")
        setConfirmarContrasena("")
    }

    return (

        <form onSubmit={handleOnSubmit}>
            <h1>Sign Up</h1>
            <div>
                <input
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <label>Usuario or correo</label>
            </div>
            <div>
                <input
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <label> Contrasena</label>
            </div>
            <div>
                <input
                    value={confirmarcontrasena}
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                />
                <label>confirmar contrasena</label>
            </div>
            <button>Registrar</button>
        </form>
    )
}