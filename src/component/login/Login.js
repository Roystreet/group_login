import React, { useState } from 'react';
import { validate } from '../../utils/utils';

const default_values = {
    email: "",
    password: ""
}

export function Login() {
    const [input, setInput] = useState(default_values)

    const [errors, setErrors] = useState({})

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(input)
        setInput(default_values)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h1>Login</h1>
            <div>
                <input
                    type="text"
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                />
                <label>Usuario</label>
                {errors.email && (<p className="danger">{errors.email}</p>)}
            </div>
            <div>
                <input
                    type="text"
                    name="password"
                    value={input.password}
                    onChange={handleInputChange}
                />
                <label>Contrasena</label>
                {errors.password && (<p className="danger">{errors.password}</p>)}
            </div>
            <button>Ingresar</button>
        </form>
    )
}