import { Link } from "react-router-dom";
import ProductCard from './ProductCard';

// const service = require("../../services/productService")
// let AllProducts = service.list()
import { useEffect, useState, useRef } from "react";

export default function ProductList() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3737/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <main>
            <div class="cuerpo">
                <section class="tarjetaProducto">
                    {products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                discount={product.discount}
                                image={product.image}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    )
}
