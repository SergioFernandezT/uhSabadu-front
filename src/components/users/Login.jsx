import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3737/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Guardar token o manejar la respuesta según sea necesario
                console.log(data)
                navigate(`/users/profile/${data.meta.user.id}`); // Redirigir a la página deseada
            } else {
                // Manejar errores de autenticación
                console.error('Error en el logueo:', response.statusText);
            }
        } catch (error) {
            console.error('Error en el logueo:', error);
        }
    };

    return (
        <main>
            <div className="login flex justify-center my-5">
                <form onSubmit={handleLogin}>
                    <h1 className="mb-3">Bienvenido 😃</h1>

                    <h3 className="mb-2">Ingresá tu nombre de usuario y contraseña.</h3>

                    <div className="email mb-3">
                        <h4>Usuario o correo electronico</h4>
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresá tu usuario." required />
                    </div>
                    <div className="password mb-1">
                        <h4>Contraseña</h4>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresá tu contraseña" required />
                    </div>
                    <div className="form-group form-check mb-2">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" id="remember_user" name="remember_user" />Recordar mi
                            usuario
                        </label>
                    </div>
                    <button className="mr-5" type="submit">Iniciar sesión</button>
                </form>
            </div>
        </main>
    );
};

export default Login;
