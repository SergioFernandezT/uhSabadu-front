export default function ProductDetail({ name, image, description, discount, price }) {
    // export default function ProductDetail() {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            // let name = 'compu'
            // let price= 10099
            // let discount= 10
            // let description= 'notebook hp 2023'
            // let image= null
      
    return (
        <main className="flex items-center justify-center my-12">
            <article className="tarjetaProducto mr-32">
                <figure>
                    <img className="main_img_principal" src={`/images/products/${image}`}
                        alt={`imagen de producto ${name}`} />
                </figure>
                <h3 className="name">
                    {name}
                </h3>

                <p>
                    {description}
                </p>
            </article>

            <article className="product-price_data">
                <h2 className="price text-3xl line-through  text-teal-500">
                    ${toThousand(price)}
                </h2>
                <h3 className="finalPrice text-5xl text-teal-600 font-semibold my-5">
                    $ {toThousand(price * (100 - discount) / 100)}
                </h3>
                <span className="text-red-600 text-xl font-semibold mr-3">
                    {discount} % OFF
                </span>
                <i className="fas fa-truck  text-teal-600"></i>
                {/* <section className="agregarSection">
                        <script>
                            function irAproductCart() {
                                window.location.href = "/products/productCart";
                            }
                        </script>
                        <form className="Agregar">
                            <button type="button" onclick="irAproductCart()"> + Agregar al carrito</button>

                        </form>
                    </section> */}
            </article>
        </main>
    );
}
