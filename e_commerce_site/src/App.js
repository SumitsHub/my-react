import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Navbar, Products } from "./components";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    // console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log(cart);
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
};

export default App;
