import React, { useState } from 'react';

export function SignUp() {
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmarcontrasena, setConfirmarContrasena] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('usuario:' + usuario);
        console.log('contrasena:' + contrasena);
        console.log('confirmarcontrasena:' + confirmarcontrasena);
        setUsuario("")
        setContrasena("")
        setConfirmarContrasena("")
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <label> Usuario or correo</label>
                </div>
                <div>
                    <input value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                    <label> Contrasena</label>
                </div>

                <div>
                    <input value={confirmarcontrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
                    <label> confirmar contrasena</label>
                </div>
                <input type="submit" value="ingresar" />
            </form>
        </>
    )
}