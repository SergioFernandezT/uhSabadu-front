import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/users/Login";
import { NavBar } from "./components/NavBar";
import ProductDetail from "./components/products/ProductDetail";
import ProductList from './components/products/ProductList';
import Analitics from "./components/products/Analitics";

export function App() {
  return (
    <>
      <Header></Header>
      <div id="wrapper">
        <div id="content-wrapper" >
          {/*<!-- Main Content -->*/}
          <div id="content" className="flex flex-col">
            {/* <TopBar /> 
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>*/}
            {/* <SideBar /> */}
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/analitics" element={<Analitics />} />
              <Route path= '/products/detail/:id' element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
