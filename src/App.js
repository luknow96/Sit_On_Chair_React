import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Price from "./components/Price";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Products />
      <Price />
      <Contact />
    </>
  );
}

export default App;
