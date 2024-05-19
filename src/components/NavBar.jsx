import { Link } from "react-router-dom";

export function NavBar() {
    return (
            <ul className="flex flex-row justify-between my-3">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" >
                    <div className="sidebar-brand-icon">
                        {/* <img className="w-100" src={image} alt="Digital House" /> */}
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Inicio</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <Link className="nav-link" to="/allGenres">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ofertas</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/lastMovie">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Novedades</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/allMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Arma tu PC</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/404">
                        <i className="fas fa-fw fa-question"></i>
                        <span>404</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
    );
}
