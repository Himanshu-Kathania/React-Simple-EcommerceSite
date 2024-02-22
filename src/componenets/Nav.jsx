
const Nav = () => {
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
    <ul className="w-[80%]">
      <li className="flex items-center   mb-3 ">
        {" "}
        <span className=" mr-3 w-[15px] h-[15px] rounded-full bg-red-300">
          {" "}
        </span>
        cat 1
      </li>

      <li className="flex items-center   mb-3 ">
        {" "}
        <span className=" mr-3 w-[15px] h-[15px] rounded-full bg-blue-300">
          {" "}
        </span>
        cat 1
      </li>

      <li className="flex items-center   mb-3 ">
        {" "}
        <span className=" mr-3 w-[15px] h-[15px] rounded-full bg-green-300">
          {" "}
        </span>
        cat 1
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Nav