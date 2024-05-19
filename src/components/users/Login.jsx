import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <main>
            <div class="login">
                <form action="/users/login" method="POST">
                    <h1>Bienvenido 😃</h1>

                    <h3>Ingresá tu nombre de usuario y contraseña.</h3>

                    <div class="email">
                        <h4>Username</h4>
                        <input type="email" id="email" name="email" placeholder="Ingresá tu usuario." required/>
                    </div>
                    {/* <% if (locals.errors && errors.email) { %> 
              <div class="text-danger" style="color: crimson;">
                <%= errors.email.msg %>
              </div>
              <% } %>*/}
                    <div class="password">
                        <h4>Contraseña</h4>
                        <input type="password" id="password" name="password" placeholder="Ingresá tu contraseña" required/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" id="remember_user" name="remember_user"/>Recordar mi
                                usuario
                        </label>
                    </div>
                    <Link to="/users/resetPassword">
                        <h6>¿Olvidaste la contraseña?</h6>
                    </Link>

                    <button type="submit">Iniciar sesión</button>
                    <button type="button" onclick="irARegister()">Crear Cuenta</button>
                    {/* <script>
                  function irARegister() {
                    window.location.href = "/users/register";
                  }
                </script> */}
                </form>
            </div>
        </main>
    )
}
