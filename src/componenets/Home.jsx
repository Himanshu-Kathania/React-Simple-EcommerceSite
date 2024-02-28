import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { PorductContext } from "../ultils/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "../ultils/axios";
const Home = () => {
  const [Products] = useContext(PorductContext);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductcategory = async () => {
    try {
      const { data } = await axios.get(`products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(Products);
    if (category != "undefined") {
      getproductcategory();
      // setfilteredProducts(Products.filter((p) => p.category == category));
    }
  }, [category, Products]);

  return Products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden ">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="border shadow w-[18%] h-[30vh] card flex flex-col justify-center items-center p-3 mr-3 "
            >
              <div
                className="hover:scale-110 w-full h-[60%] bg-no-repeat bg-contain bg-center mb-3"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
