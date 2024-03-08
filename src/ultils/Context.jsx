import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const PorductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // const getproducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getproducts();
  // }, []);

  console.log(products);

  return (
    <PorductContext.Provider value={[products, setProducts]}>
      {props.children}
    </PorductContext.Provider>
  );
};

export default Context;
