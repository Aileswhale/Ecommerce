import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"
import "./Hero.css"

const Hero = () => {
  return (
     <div className=" flex hero h-[100vh]">
            <div className=' flex left flex-1 flex-col justify-center gap-[20px] pl-[180px] leading-[1.1] '>
              <h2 className="text-[#090909] text-[1.2rem] text-600"> NEW ARRIVALS ONLY</h2>
              <div>
                    <div className=" flex items-center gap-[20px]">
                        <p className="text-[80px] text-[#171717] text-700">new</p>
                        <img src={hand_icon} alt="hand" className="w-[105px]" />
                    </div>
                    <p className="text-[80px] text-[#171717] text-700">collections</p>
                  <p className="text-[80px] text-[#171717] text-700">for everyone</p>
              </div>
              <div className=" flex justify-center items-center gap-[15px] rounded-[75px] h-[70px] w-[310px] mt-[30px] bg-[#ff4141] text-white-500 text-[22px] text-500 ">
                  <div>Latest Collection </div>
                  <img src={arrow_icon} alt="arrow" />
                </div>
            </div>
            
            <div className='right flex-[0.7] flex items-center justify-center'>
                <img src={hero_image} alt="hero"  className=""/>
            </div>
    </div>
  )
}

export default Hero;
