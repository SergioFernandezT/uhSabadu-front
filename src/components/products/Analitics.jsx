import React from 'react'
// const Service = require('../../services/productService')
import { useEffect, useState, useRef } from "react";
import CategorySmallCard from '../categories/CategorySmallCard';
import { Link } from 'react-router-dom';

export default function Analitics() {
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
      .then((data) => setProducts(data.meta.count))
      .catch((e) => console.log(e))
  }, []);

  console.log(products)

  return (
    <main >
      <grid >
        <Link to="/products"> <h3 className="flex justify-center items-center">👉 Catalogo de productos</h3></Link>
        <div className='first-row flex items-center justify-center my-5 '>
          <div className="cuerpo w-1/4 mr-14 ">
            <grid className='bg-slate-50'>
              <h3 className='bg-orange-300 text-center font-bold rounded-t-xl'>Total de Productos</h3>
              {products}
            </grid>
          </div>
          <div className="cuerpo w-1/4 mr-14 bg-slate-50">
            <grid>
              <h3 className='bg-green-200 text-center font-bold'>Total de Usuarios</h3>
              {products}
            </grid>
          </div>
          <div className="cuerpo w-1/4 bg-slate-50">
            <grid>
              <h3 className='bg-sky-400 text-center font-bold'>Total de Categorias</h3>
              {products}
            </grid>
          </div>
        </div>
        <div className='row flex items-center justify-center my-5 '>
          <grid className='first-row flex items-center justify-center my-5 w-11/12 '>
            <div className="cuerpo w-1/3 bg-slate-50 mr-12">
              <h3 className='bg-orange-500 text-center font-bold'>Ultimo Producto</h3>
              {products}
            </div>
            <div className="cuerpo w-1/3 bg-slate-50">
              <h3 className='bg-violet-300 text-center font-bold'>Ultimo Usuario</h3>
              {products}
            </div>
          </grid>
        </div>
        <div className='category-row flex items-center justify-center my-5 '>
          <grid className='first-row flex items-center justify-center w-11/12 '>
            <div className="cuerpo w-1/3">
              <h3 className='bg-yellow-400 text-center font-bold rounded-t-xl'>Productos por categoria</h3>
              {/* {totalCategories.map((product) => {
                return ( */}
              <CategorySmallCard
                key={1}
                name='compu'
                total={15}
              />
              {/*      )
               })} */}
            </div>
          </grid>
        </div>
      </grid>
    </main>
  )
}
