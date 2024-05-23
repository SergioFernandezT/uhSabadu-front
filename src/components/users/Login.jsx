import { Component } from 'react'
import { Link } from "react-router-dom";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            user: {}
        };
    }

    userValidate = (event) => {
        event.preventDefault();
        // this.setState({
        //     email: this.state.email = event.target[0].value,
        //     password: this.state.password = event.target[1].value
        // });
        console.log(`${event.target[0].value}`)
        let user = { VACIO: "" }
        fetch("http://localhost:3737/api/users/login", {
            method: 'POST',
            mode: 'cors',
            body: {
                email: `${event.target[0].value}`,
                password: event.target[1].value
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
                // Aquí puedes incluir otras cabeceras requeridas por el servidor
            },
        })
            .then((res) => res.json())
            // .then((data) => this.setState({ user: this.state.user = data }))
            .then((data) => console.log(data))
            .catch((e) => console.log(e))
        console.log(user)
    }

    render() {
        return (
            <main>
                <div className="login flex justify-center my-5">
                    <form action="/users/login" method="POST" onSubmit={this.userValidate}>
                        <h1 className="mb-3">Bienvenido 😃</h1>

                        <h3 className="mb-2">Ingresá tu nombre de usuario y contraseña.</h3>

                        <div className="email mb-3">
                            <h4>Usuario o correo electronico</h4>
                            <input type="email" id="email" name="email" placeholder="Ingresá tu usuario." required />
                        </div>
                        {/* <% if (locals.errors && errors.email) { %> 
              <div className="text-danger" style="color: crimson;">
                <%= errors.email.msg %>
              </div>
              <% } %>*/}
                        <div className="password mb-1">
                            <h4>Contraseña</h4>
                            <input type="password" id="password" name="password" placeholder="Ingresá tu contraseña" required />
                        </div>
                        <div className="form-group form-check mb-2">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" id="remember_user" name="remember_user" />Recordar mi
                                usuario
                            </label>
                        </div>
                        <Link to="/users/resetPassword">
                            <h6>¿Olvidaste la contraseña?</h6>
                        </Link>

                        <button className="mr-5" type="submit">Iniciar sesión</button>
                        {/* <button type="button" onClick="irARegister()">Crear Cuenta</button> */}
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
}
