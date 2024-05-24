import React from 'react'
// const Service = require('../../services/productService')
import { useEffect, useState, useRef } from "react";
import CategorySmallCard from '../categories/CategorySmallCard';
import { Link } from 'react-router-dom';
import ProductSmallCard from './ProductSmallCard';
import UserSmallCard from '../users/UserSmallCard';

export default function Analitics() {
  let [products, setProducts] = useState(null);
  let [users, setUsers] = useState(null);
  let [categories, setCategories] = useState(null);
  let [productsByCategories, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse, userResponse, categoryResponse,productsByCategoriesResponse] = await Promise.all([
          fetch('http://localhost:3737/api/products'),
          fetch('http://localhost:3737/api/users'),
          fetch('http://localhost:3737/api/categories'),
          fetch('http://localhost:3737/api/products/count-by-category'),
        ]);

        const data1 = await productResponse.json();
        const data2 = await userResponse.json();
        const data3 = await categoryResponse.json();
        const data4 = await productsByCategoriesResponse.json();

        setProducts(data1);
        setUsers(data2);
        setCategories(data3);
        setProductsByCategory(data4);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let lastProduct = products?.data?.pop()
  let lastUser = users?.data?.pop()
  let totalCategories = productsByCategories?.data

  if (loading) return <p className="text-4xl text-center p-20">Loading...</p>;
  if (products.data?.length > 0 && users.data?.length > 0 && categories.data?.length > 0)
    return (
      <main >
        <grid >
          <Link to="/products"> <h3 className="flex justify-center items-center">👉 Catalogo de productos</h3></Link>
          <div className='first-row flex items-center justify-center my-5 '>
            <div className="cuerpo w-1/4 mr-14 rounded-md">
              <grid className='bg-slate-50'>
                <h3 className='bg-orange-300 text-center font-bold rounded-t-xl'>Total de Productos</h3>
                {products.meta?.count}
              </grid>
            </div>
            <div className="cuerpo w-1/4 mr-14 bg-slate-50 rounded-md">
              <grid>
                <h3 className='bg-green-200 text-center font-bold'>Total de Usuarios</h3>
                {users.meta?.count}
              </grid>
            </div>
            <div className="cuerpo w-1/4 bg-slate-50">
              <grid>
                <h3 className='bg-sky-400 text-center font-bold'>Total de Categorias</h3>
                {categories.meta?.count}
              </grid>
            </div>
          </div>
          <div className='row flex items-center justify-center my-5 '>
            <grid className='first-row flex items-center justify-center my-5 w-11/12 '>
              <div className="cuerpo w-1/3 bg-slate-50 mr-12">
                <h3 className='bg-orange-500 text-center font-bold'>Ultimo Producto</h3>
                <div className="container m-6  w-full">
                  <ProductSmallCard

                    key={lastProduct.id}
                    id={lastProduct.id}
                    name={lastProduct.name}
                    price={lastProduct.price}
                    discount={lastProduct.discount}
                  // image={lastProduct.image}
                  />
                </div>
              </div>
              <div className="cuerpo w-1/3 bg-slate-50">
                <h3 className='bg-violet-300 text-center font-bold'>Ultimo Usuario</h3>
                <div className="container m-6  w-full">
                  <UserSmallCard
                    key={lastUser.id}
                    id={lastUser.id}
                    first_name={lastUser.first_name}
                    last_name={lastUser.last_name}
                    email={lastUser.email}
                    image={lastUser.image}
                  />

                </div>
              </div>
            </grid>
          </div>
          <div className='category-row flex items-center justify-center my-5 '>
            <grid className='first-row flex items-center justify-center w-11/12 '>
              <div className="cuerpo w-1/3">
                <h3 className='bg-yellow-400 text-center font-bold rounded-t-xl'>Productos por categoria</h3>
                {totalCategories.map((category) => {
                  return (
                    <CategorySmallCard
                      key={category.id}
                      name= {category.name}
                      total={category.count}
                    />
                  )
                })}
              </div>
            </grid>
          </div>
        </grid>
      </main>
    )
}
