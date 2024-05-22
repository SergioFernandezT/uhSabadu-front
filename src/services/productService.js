import { useEffect, useState, useRef } from "react";
let [products, setProducts] = useState([]);

useEffect(() => {
    fetch("http://localhost:3737/api/products", {
        method: 'GET',
        mode: 'cors',
        headers: {
            // 'Content-Type': 'text/plain',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            // Aquí puedes incluir otras cabeceras requeridas por el servidor
        }
    })
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((e) => console.log(e))
}, []);

module.exports = {
    list: () => { return products.data },
    count: () => { return products.meta.count },
}