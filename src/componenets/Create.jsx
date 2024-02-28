import React, { useContext, useState } from "react";
import { PorductContext } from "../ultils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(PorductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      description.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("each input must have atleast 4 charecter");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      price,
      category,
      description,
    };

    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] h-screen w-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        placeholder="enter product description here...."
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>
      <div className="w-1/2 ">
        <button
          to={"/create"}
          className=" py-3 px-5 rounded border text-blue-600 border-blue-400"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
