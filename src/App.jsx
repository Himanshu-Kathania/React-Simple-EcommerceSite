import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Details from "./componenets/Details";
import Create from "./componenets/Create";

function App() {
  const { search, pathname } = useLocation();

  console.log(pathname);
  return (
    <>
      <div className="w-screen h-screen flex ">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to={"/"}
            className="text-red-300 absolute left-[17%] top-[1%]  py-2 px-4 rounded border border-blue-600"
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
