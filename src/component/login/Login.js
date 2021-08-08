import React, { useState } from 'react';


export function Login() {
    const [input, setInput] = useState({ usuario: "", contrasena: "" })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('usuario:' + input.usuario);
        console.log('contrasena:' + input.contrasena);
        setInput(input.usuario = "")
        setInput(input.contrasena = "");
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input value={input.usuario} onChange={(e) => setInput(e.target.value)} />
                    <label> Usuario or correo</label>
                </div>
                <div>
                    <input value={input.contrasena} onChange={(e) => setInput(e.target.value)} />
                    <label> Contrasena</label>
                </div>
                <input type="submit" value="ingresar" />
            </form>
        </>
    )
}