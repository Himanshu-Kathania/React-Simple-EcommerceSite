import { useContext } from "react";
import { PorductContext } from "../ultils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [Products] = useContext(PorductContext);

  let distinct_category =
    Products && Products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-300 flex flex-col items-center pt-5">
        <a
          href=""
          className="py-3 px-5 rounded border text-blue-600 border-blue-400"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%]">Catagory</h1>
        <div className="w-[80%]">
          {distinct_category.map((c, i) => (
            <Link
              to={`/?category=${c}`}
              key={i}
              className="flex items-center   mb-3 "
            >
              {" "}
              <span className="  mr-3 w-[15px] h-[15px] rounded-full bg-blue-500">
                {" "}
              </span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
