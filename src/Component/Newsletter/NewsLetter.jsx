import React from 'react'
import "../Hero/Hero.css"
const NewsLetter = () => {
  return (
    <div className=" w-[65%] h-auto flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] hero gap-[30px] ">
      <h1 className="text-[#454545] text-[55px] text-[600] pt-[1rem]">
        {" "}
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[20px] text-[#454545] ">
        Subscribe to our Newsletter and stay updated
      </p>
      <div className='flex items-center justify-between bg-white-500 w-[730px] h-[70px] rounded-[80px] border'>
        <input type="email" placeholder="Your Email id" name="" id="" className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[1rem]'/>
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[1rem] cursor-pointer'> Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter