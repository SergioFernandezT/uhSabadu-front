import { useEffect, useState, useRef } from "react";

let [products, setProducts] = useState([]);

useEffect(() => {
    fetch("http://localhost:3737/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
        .catch((e) => console.log(e));
}, []);

const service = { 
    'list' : () => {return products}
};

module.exports = service