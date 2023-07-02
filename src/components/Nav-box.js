import React from "react";
import { useGlobalContext } from "./context";
import close from "../images/icon-menu-close.svg";

export const Box = () => {
  const { openMenu, setOpenMenu } = useGlobalContext();

  return (
    <div className="flex font-[Inter] justify-end absolute bg-zinc-800 bg-opacity-60 w-full h-full md:hidden">
      <div className="bg-white w-[69%] mr-[-4px] p-5 pr-7">
        <div className="flex justify-end">
          <img src={close} onClick={() => setOpenMenu(false)} />
        </div>
        <div className="mt-[35%] font-bold text-[#00001a]">
          <h1 className="mt-4">Home</h1>
          <h1 className="mt-4">New</h1>
          <h1 className="mt-4">Popular</h1>
          <h1 className="mt-4">Trending</h1>
          <h1 className="mt-4">Categories</h1>
        </div>
      </div>
    </div>
  );
};
