import React, { useState } from 'react';
import { validate } from '../../utils/utils';

export function Login() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

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