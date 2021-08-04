import React, { useState } from 'react';


function Login(){
    const [usuario, setUsuario]= useState("")
    const [contrasena, setContrasena]= useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('usuario:'+usuario);
        console.log('contrasena:'+contrasena);
        setUsuario("")
        setContrasena("")
    }

    return (
        <>
        <form onSubmit={handleOnSubmit}> 
            <div>
                <input value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
                <label> Usuario or correo</label>
            </div>
            <div>
                <input  value={contrasena} onChange={(e)=> setContrasena(e.target.value)}/>
                <label> Contrasena</label>
            </div>         
            <input type="submit" value="ingresar"/>
        </form>
        </>
    )
}

export default Login;