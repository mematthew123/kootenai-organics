import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Poppins } from "next/font/google";
import Image from "next/image";
import navLogo from "/public/Kootenai Organics_Primary Logo - Grass.png";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "400",
});

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("transparent");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#black");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='flex text-[#FBF4E2] justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={navLogo}
            alt='/'
            width={200}
            height={200}
            className='cursor-pointer'
          />
        </Link>
        <ul className='hidden sm:flex font-poppins text-[#423A30] '>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/menu'>Menu</Link>
          </li>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/hammer'>Velvet Hammer</Link>
          </li>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/news'>News</Link>
          </li>
          <li className='p-4 hover:text-[#183B47] hover:underline'>
            <Link href='/wholesale'>Wholesale</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} className='text-[#FBF4E2]' />
          ) : (
            <AiOutlineMenu size={20} className='text-[#423A30]' />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#183B47] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#183B47] text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/'>Home</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/menu'>Menu</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-600'>
              <Link href='/hammer'>Velvet Hammer</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/about'>About</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/contact'>Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/news'>News</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-600'
            >
              <Link href='/wholesale'>Wholesale</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
