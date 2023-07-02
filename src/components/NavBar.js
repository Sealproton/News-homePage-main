import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import { useGlobalContext } from "./context";

export const Navbar = () => {
  const { openMenu, setOpenMenu } = useGlobalContext();

  return (
    <div className="h-[65px]  hover:cursor-pointer  font-[Inter] w-full flex justify-between items-center p-4 pt-7 md:pl-20">
      <img
        src={logo}
        className=" w-[35px] h-[22px] md:w-[4.2rem] md:h-[3rem]"
      ></img>
      <img
        src={menu}
        onClick={() => setOpenMenu(true)}
        className="w-[35px] pointer md:hidden"
      ></img>
      <div className="max-[768px]:hidden justify-end text-[#69696c] w-[50%] flex gap-[4%] hover:cursor-pointer">
        <h1 className="text-[1.3rem]">Home</h1>
        <h1 className="text-[1.3rem]">New</h1>
        <h1 className="text-[1.3rem]">Popular</h1>
        <h1 className="text-[1.3rem]">Trending</h1>
        <h1 className="text-[1.3rem]">Categories</h1>
      </div>
    </div>
  );
};
