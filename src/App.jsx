import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Details from "./componenets/Details";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex ">



<Routes>

<Route path="/" element={<Home/>} />
<Route path="/details/:id" element={<Details/>} />
</Routes>
        
      </div>
    </>
  );
}

export default App;
