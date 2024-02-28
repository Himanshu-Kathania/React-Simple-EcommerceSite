import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../ultils/axios";
import Loading from "./Loading";
import { PorductContext } from "../ultils/Context";

const Details = () => {
  const [products, setProducts] = useContext(PorductContext);
  const [product, setproduct] = useState(null);

  const { id } = useParams();
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  return product ? (
    <div className=" flex w-[70%] h-full justify-between gap-5 m-auto p-[10%] ">
      <img
        className=" object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[50%] ">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-500 my-5  "> {product.category}</h3>
        <h2 className="text-red-300">$ {product.price}</h2>
        <p className="mb-8">{product.description}</p>
        <Link className="mr-5 py-3 px-5 rounded border text-blue-600 border-blue-400">
          Edit
        </Link>
        <Link className="py-3 px-5 rounded border text-red-600 border-red-400">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
