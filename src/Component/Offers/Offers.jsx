import Exclusive_image from "../assets/exclusive_image.png"
import "../Hero/Hero.css"
const Offers = () => {
  return (
    <div className="flex hero w-[65%] h-[70vh] m-auto px-[50px] mb-[3rem] justify-between items-center ">
      <div className="left flex flex-col w-[55%]  justify-center ">
        <h1 className="text-[#171717] text-[3.5rem] text-600">Exclusive</h1>
        <h1 className="text-[#171717] text-[3.5rem] text-600">
          Offers For You
        </h1>
        <p className=" text-[#171717] text-[1.7rem] text-600">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] text-white text-[1.5rem] border-none text-500 mt-[30px] cursor-pointer">
          {" "}
          Check Now
        </button>
      </div>
      <div className="right flex items-center w[30%] pt-[50px]">
        <img src={Exclusive_image} alt="exclusive"  />
      </div>
    </div>
  );
}

export default Offers
