import { Link } from "react-router-dom";
import Nav from "./Nav";
import { PorductContext } from "../ultils/Context";
import { useContext } from "react";
import Loading from "./Loading";
const Home = () => {
  const [Products] = useContext(PorductContext);
  return Products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden  ">
        {Products.map((p, i) => (
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
