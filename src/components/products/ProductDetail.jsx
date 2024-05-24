import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

    const { id } = useParams()
    //  EL TO STRING FALLA
    const eraseLastDot = (word) => { const arr = [...word]; arr[arr.lastIndexOf('.')] = ','; return arr.join(''); }
    const toThousand = n => eraseLastDot(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

    const pre = "111.1"
    const [loading, setLoading] = useState(true);
    let [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3737/api/products/detail/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-4xl text-center p-20">Loading...</p>;
    if (product)
        return (
            <main className="flex items-center justify-center my-12">
                <article className="tarjetaProducto mr-32">
                    <figure>
                        <img className="main_img_principal" src={`/images/products/${product.image}`}
                            alt={`imagen de producto ${product.name}`} />
                    </figure>
                    <h3 className="name">
                        {product.name}
                    </h3>

                    <p>
                        {product.description}
                    </p>
                </article>

                <article className="product-price_data">
                    <h2 className="price text-3xl line-through  text-teal-500">
                        ${toThousand(product.price)}
                    </h2>
                    <h3 className="finalPrice text-5xl text-teal-600 font-semibold my-5">
                        $ {toThousand((product.price * (100 - product.discount) / 100).toFixed(2))}
                    </h3>
                    <span className="text-red-600 text-xl font-semibold mr-3">
                        {product.discount} % OFF
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
