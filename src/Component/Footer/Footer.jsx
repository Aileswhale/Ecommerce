import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[2.2rem] text-700">SHOPPER</p>
      </div>
      <ul className="flex style-none gap-[50px] text-[#252525] text-[1.3rem]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer"> Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px]">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="copywrite flex-col flex items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[1.4rem]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer