import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`menu fixed bg-[#000] z-[999] duration-1000 ease-in-out w-screen ${
          menuOpen ? `h-screen` : `h-0 overflow-hidden pointer-events-none`
        }`}>
        <div
          className={`w-[200px] h-[200px] md:w-[400px] md:h-[400px] duration-500 delay-500 absolute bg-[#0c51ff59] rounded-full right-0 top-[20%] pointer-events-none blur-[40px] ${
            menuOpen ? `opacity-1` : `opacity-0`
          }`}></div>
        <div
          className={`w-[200px] h-[200px] md:w-[400px] md:h-[400px] duration-500 delay-500 absolute bg-[#ff0c0c59] rounded-full right-40 top-[30%] pointer-events-none blur-[40px] ${
            menuOpen ? `opacity-1` : `opacity-0`
          }`}></div>
        <div
          className={`w-[200px] h-[200px] md:w-[400px] md:h-[400px] duration-500 delay-500 absolute bg-[#0cff1859] rounded-full right-20 top-[50%] pointer-events-none blur-[40px] ${
            menuOpen ? `opacity-1` : `opacity-0`
          }`}></div>
        <h1>Menu</h1>
        <div className="h-[100%] flex flex-col justify-center gap-2 px-10 text-[3rem] sm:text-[4rem] md:text-[5rem] uppercase">
          <span className="h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center relative overflow-hidden">
            <Link
              to="/hyperspace/pricing"
              className={`absolute delay-500 ease-in-out duration-1000 ${
                menuOpen ? `top-[-10px]` : `top-20`
              }`}>
              GPUs
            </Link>
          </span>
          <span className="h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center relative overflow-hidden">
            <Link
              to="/hyperspace/pricing"
              className={`absolute delay-500 ease-in-out duration-1000 ${
                menuOpen ? `top-[-10px]` : `top-20`
              }`}>
              Serverless
            </Link>
          </span>
          <span className="h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center relative overflow-hidden">
            <Link
              to="/hyperspace/pricing"
              className={`absolute delay-500 ease-in-out duration-1000 ${
                menuOpen ? `top-[-10px]` : `top-20`
              }`}>
              Hosting
            </Link>
          </span>
          <span className="h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center relative overflow-hidden">
            <Link
              to="/hyperspace/pricing"
              className={`absolute delay-500 ease-in-out duration-1000 ${
                menuOpen ? `top-[-10px]` : `top-20`
              }`}>
              Blog
            </Link>
          </span>
          <span className="h-[3rem] sm:h-[4rem] md:h-[5rem] flex items-center relative overflow-hidden">
            <Link
              to="/hyperspace/pricing"
              className={`absolute delay-500 ease-in-out duration-1000 ${
                menuOpen ? `top-[-10px]` : `top-20`
              }`}>
              Docs
            </Link>
          </span>
          <button className="linear--button text-[2rem] text-[#000] w-fit px-4 py-2 mt-10 uppercase rounded-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="sticky top-0 backdrop-blur-lg z-[1000]">
        <nav className="flex justify-between items-center text-[14px] p-3 bg-[#00000089]">
          <Link to="/hyperspace" className="w-[200px]">
            HYPERSPACE.
          </Link>
          {windowWidth > 900 ? (
            <span className="flex gap-4">
              <Link to="/hyperspace/pricing">GPUs</Link>
              <Link to="/hyperspace/serverless">Serverless</Link>
              <Link to="/hyperspace/hosting">Hosting</Link>
              <a>Blog</a>
              <a>Docs</a>
            </span>
          ) : (
            ``
          )}
          <span className="flex gap-4">
            <button className="py-2 w-[120px] linear--button text-[#000] rounded-lg">
              Get Started
            </button>
            <button className="py-2 px-4 ring-1 text-[#9aff4d] ring-[#9aff4d] rounded-lg">
              Docs
            </button>
            <button
              className="px-4 bg-[#333] rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}>
              <img className="w-[20px]" src="./menu.png"></img>
            </button>
          </span>
        </nav>
        <div className="notification-bar text-[10px] sm:text-[14px] text-[#CBCCD1] flex items-center justify-center gap-4 w-full bg-purple-100 py-2 ring-[0.5px] ring-[#444]">
          <img
            className="w-[25px] p-2 rounded-full bg-[#444]"
            src="./heart.png"></img>
          <p>Lightning Payment: More Power, less cost!</p>
          <p className="font-thin">|</p>
          <p className="font-bold">Learn more</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
