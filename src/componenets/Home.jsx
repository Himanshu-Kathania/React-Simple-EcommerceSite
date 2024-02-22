import { Link } from "react-router-dom"
import Nav from "./Nav"

const Home = () => {
  return (
 <>  
 <Nav/>

   <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden  ">
          <Link to={"/details/1"} className="border shadow w-[18%] h-[30vh] card flex flex-col justify-center items-center p-3 mr-3 ">
            <div
              className="hover:scale-110 w-full h-[60%] bg-no-repeat bg-contain bg-center mb-3"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="hover:text-blue-400">Lorem, ipsum dolor.</h1>
          </Link>

          

        
      </div>
      </> 
  )
}

export default Home