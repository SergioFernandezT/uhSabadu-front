
import ProductSmallCard from './ProductSmallCard';

// const service = require("../../services/productService")
// let AllProducts = service.list()
import { useEffect, useState, useRef } from "react";

export default function ProductList() {

    // let [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3737/api/products")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data.data))
    //         .catch((e) => console.log(e));
    // }, []);

    let products = [
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        },
        {
            id: 2,
            name: 'compu',
            price: 10099,
            discount: 10,
            description: 'notebook hp 2023',
            category_id: 1,
            image: null
        }
    ]
    return (
        <main>
            <div className="cuerpo">
                <section className="flex items-center justify-center mt-4 flex-wrap">
                    {products.map((product) => {
                        return (
                            <ProductSmallCard
                                key={product.id}
                                name={product.name}
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
