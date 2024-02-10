import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
   const [menu,setMenu] = useState("shop")
  return (
      <div className=" flex items-center justify-around p-[1rem] shadow ">
          
          <div className=" flex items-center gap-[0.7rem]">
              <img src={logo} alt="logo" />
              <p className="text-[#171717] text-[2.2rem] text-[600]">SHOPPER</p>
          </div>
          <ul className=" navMenu flex gap-[50px] items-center list-none text-[#626262] text-[500] text-[1.4rem] ">
              <li onClick={() => { setMenu("shops") }}><Link to={"/"}>Shop</Link>  {menu === "shops" ?<hr className="border-none w-[80%] h-[0.2rem] rounded-[0.63rem] bg-[#ff4141] " /> : <></> }</li>
              <li onClick={() => {setMenu("men")}}><Link to={"mens"}> Men</Link>{menu === "men" ?<hr  /> : <></> }</li>
              <li onClick={() => {setMenu("women")}}><Link to={"/womens"}> Women</Link>{menu === "women" ?<hr  /> : <></> }</li>
              <li onClick={() => {setMenu("kids")}}><Link to={"/kids"}>Kids</Link> {menu === "kids" ?<hr  /> : <></> }</li>
          </ul>
          <div className="flex items-center gap-[2.8rem]">
              <Link to= "/login"><button className="outline-none w-[9.8rem] h-[3.63rem] border-[1px] border-solid border-[#7a7a7a] rounded-[4.7rem] text-[#515151] text-[500] bg-white-500 cursor-pointer active:bg-[#f3f3f3]">Login</button></Link>
             <Link to="/cart"><img src={cart_icon} alt="cart" /></Link> 
              <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] text-white text-[14px] bg-red-500 rounded-[11px] ">0</div>
          </div>
      
    </div>
  )
}

export default Navbar; 