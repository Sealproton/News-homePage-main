import webMobile from "../images/image-web-3-mobile.jpg";
import webDesktop from "../images/image-web-3-desktop.jpg";
import pc from "../images/image-retro-pcs.jpg";
import kb from "../images/image-top-laptops.jpg";
import game from "../images/image-gaming-growth.jpg";
import { useGlobalContext } from "./context";

export const Content = () => {
  const { openMenu, setOpenMenu } = useGlobalContext();

  return (
    <div className="font-[Inter]  w-full p-4 mt-3 mb-10 md:mt-11 md:pr-0 md:pl-20">
      <div className="md:flex">
        <div className="md:flex md:flex-col  md:w-[75%]">
          <img src={webMobile} className="md:hidden"></img>
          <img
            src={webDesktop}
            className="max-[768px]:hidden w-[95%]  md:h-[60%]"
          />
          <div className="mt-12 md:flex  w-[100%]">
            <h1 className="font-extrabold leading-[2.5rem] text-[2.5rem] w-[90%] md:w-[40%] md:text-[3.5rem] md:leading-[4rem]">
              The Bright Future Of Web 3.0?
            </h1>
            <div className=" md:pl-[15%] md:w-[60%] md:pr-0">
              <p className="text-[15px]  mt-3 md:w-[90%] md:mt-0 md:leading-[1.5rem]">
                We dive into the next evolution of the web that clains to put
                the power of the platforms back into the handes of the people.
                But is it really fulfilling its promise?
              </p>
              <button
                type="button"
                className="mt-5 h-[40px] w-[180px] text-white text-[0.9rem] tracking-widest bg-[#f15e50] md:mt-10"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#00001a] mt-12 pt-4 pl-8 pr-8 pb-6 md:w-[32%]  md:pr-10  md:pl-10  md:mt-0 md:pb-12">
          <h1 className="text-[#e9ab53] font-bold text-[2rem] md:mt-3">New</h1>
          <h2 className="text-white mt-5 font-bold text-[1.2rem]  md:mt-8">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-[#c5c6ce] mt-2 text-[0.8rem] tracking-wider font-[100]  md:mt-3 md:leading-6">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="mt-5  md:mt-8" />
          <h2 className="text-white mt-5 font-bold text-[1.2rem]  md:mt-8">
            The Downsides of AI Artistry
          </h2>
          <p className="text-[#c5c6ce] mt-2 text-[0.8rem] tracking-wider font-[100]  md:mt-3   md:leading-6">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="mt-5  md:mt-8" />
          <h2 className="text-white mt-5 font-bold text-[1.2rem]  md:mt-8">
            Is VC Funding Drying Up?
          </h2>
          <p className="text-[#c5c6ce] mt-2 text-[0.8rem] tracking-wider font-[100]  md:mt-3   md:leading-6">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className="  md:flex md:mt-16 ">
        <div className="flex  mt-14 md:mt-0 ">
          <img src={pc} className="w-[110px] md:w-[180px]" />
          <div className="ml-6">
            <h1 className="text-[2rem] font-extrabold text-[#c5c6ce]">01</h1>
            <h1 className="font-extrabold">Reviving Retro PCs</h1>
            <p className="text-[0.8rem] text-[#c5c6ce] w-[90%] mt-2 ">
              What happen when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex  mt-6 md:mt-0">
          <img src={kb} className="w-[110px] md:w-[180px]" />
          <div className="ml-6">
            <h1 className="text-[2rem] font-extrabold text-[#c5c6ce]">02</h1>
            <h1 className="font-extrabold">Top 10 Laptops of 2022</h1>
            <p className="text-[0.8rem] text-[#c5c6ce] w-[90%] mt-2">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex  mt-6 md:mt-0 md:ml-8">
          <img src={game} className="w-[110px] md:w-[180px]" />
          <div className="ml-6">
            <h1 className="text-[2rem] font-extrabold text-[#c5c6ce]">03</h1>
            <h1 className="font-extrabold">The Growth of Gaming</h1>
            <p className="text-[0.8rem] text-[#c5c6ce] w-[90%] mt-2">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
