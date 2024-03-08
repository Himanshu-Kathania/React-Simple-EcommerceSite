import React, { useContext, useEffect, useState } from "react";
import { PorductContext } from "../ultils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(PorductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //   const [title, settitle] = useState("");
  //   const [image, setimage] = useState("");
  //   const [category, setcategory] = useState("");
  //   const [price, setprice] = useState("");
  //   const [description, setdescription] = useState("");

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 2 ||
      product.description.trim().length < 5
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
    console.log(product);
    // setProducts([...products, product]);
    // localStorage.setItem("products", JSON.stringify([...products, product]));
  };

  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className="flex flex-col items-center p-[5%] h-screen w-screen"
      >
        <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
        <input
          type="url"
          placeholder="Image Link"
          className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          name="image"
          onChange={changeHandler}
          value={product && product.image}
        />

        <input
          type="text"
          placeholder="title"
          className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          name="title"
          onChange={changeHandler}
          value={product && product.title}
        />

        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="category"
            className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
            name="image"
            onChange={changeHandler}
            value={product && product.category}
          />

          <input
            type="number"
            placeholder="price"
            className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
            name="price"
            onChange={changeHandler}
            value={product && product.price}
          />
        </div>

        <textarea
          placeholder="enter product description here...."
          name="description"
          onChange={changeHandler}
          value={product && product.description}
          className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          rows="10"
        ></textarea>
        <div className="w-1/2 ">
          <button
            to={"/create"}
            className=" py-3 px-5 rounded border text-blue-600 border-blue-400"
          >
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
