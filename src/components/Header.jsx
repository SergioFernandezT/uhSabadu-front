import { Link } from "react-router-dom";

const headerStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    gap: "25px",
    alignItems: "center",
    width: "98vw",
};

export function Header() {
    return (
        <header className=" flex flex-row items-center justify-between">
            <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
            <form action="/products/search" method="GET" className="search-form">
                <input type="text" name="keywords" placeholder="Buscar productos, marcas y más" className="search-form_input"/>
                <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
            </form>
            <div className="buttons w-1/5">
                <div className="flex flex-row items-center justify-around">
                    <div>
                        <i className="fa-solid fa-user-large"></i>
                        <Link to="/users/login">Login</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <Link to="/products/productCart">Carrito</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}