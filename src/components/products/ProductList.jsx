
import ProductSmallCard from './ProductSmallCard';
import { useEffect, useState, useRef } from "react";

export default function ProductList() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3737/api/products", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <main>
            <div className="cuerpo">
                <section className="flex items-center justify-center mt-4 flex-wrap">
                    {products.map((product) => {
                        return (
                            <ProductSmallCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                discount={product.discount}
                                image={product.image}
                            />);
                    })}
                </section>
            </div>
        </main>
    )
}
