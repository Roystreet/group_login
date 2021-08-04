import React from 'react';

function SignUpTiltle(props){
    return(
        <h1>{props.titulo} </h1>
    )
}
// formulario 
function SignUp(props){
    return (
        <>
        <SignUpTiltle titulo={props.titulo}/>
        <form> </form> 
        </>
    )
}

export default SignUp;