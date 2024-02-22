import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PorductContext } from "../ultils/Context";

const Details = () => {
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  return (
    <div className=" flex w-[70%] h-full justify-between gap-5 m-auto p-[10%] ">
      <img
        className=" object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />

      <div className="content w-[50%] ">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-500 my-5  "> men clothing</h3>
        <h2 className="text-red-300">$109.95</h2>
        <p className="mb-8">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="mr-5 py-3 px-5 rounded border text-blue-600 border-blue-400">
          Edit
        </Link>
        <Link className="py-3 px-5 rounded border text-red-600 border-red-400">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
