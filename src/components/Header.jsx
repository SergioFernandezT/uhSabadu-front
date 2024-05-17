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
            <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
            <form action="/products/search" method="GET" className="search-form">
                <input type="text" name="keywords" placeholder="Buscar productos, marcas y más" className="search-form_input"></input>
                <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
            </form>
            <div className="buttons w-1/5">
                <div className="flex flex-row items-center justify-around">
                    <div>
                        <i className="fa-solid fa-user-large"></i>
                        <a href="/users/login">Login</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <a href="/products/productCart">Carrito</a>
                    </div>
                </div>
            </div>
        </header>
    )
}