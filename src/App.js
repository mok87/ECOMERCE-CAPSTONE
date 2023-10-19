import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/buttons/Login";
import Signup from "./components/buttons/Signup";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
