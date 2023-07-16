'use client'
import React from 'react'
import Image from 'next/image';
import Logo from "/public/images/Logo.jpg";
import { Search, ShoppingCart } from "lucide-react";
import {AiOutlineClose, AiOutlineMenu , AiFillMediumSquare} from "react-icons/ai";
import { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "../ui/menubar"
  
import Link from 'next/link';

const Navbar = () => {
  const [nav , setNav] = useState(false);
  const handleNav = () =>{
      setNav(!nav); 
  };

  return (
    <div className='h-12 py-5 mx-18 max-w-auto justify-center'>
      <Menubar className=' gap-x-10  text-sm  border-none'>
        <div className='py-5 px-10 '>
          <Image src={Logo} className='items-center mx-20 ' w-140 h-25 alt="logo" loading='lazy' ></Image>
        </div>
        <MenubarMenu>
        <MenubarTrigger><Link href={"#"}>Female</Link></MenubarTrigger>
        <MenubarTrigger><Link href={"#"}>Male</Link></MenubarTrigger>
        <MenubarTrigger><Link href={"#"}>Kids</Link></MenubarTrigger>
        <MenubarTrigger> <Link href="./productspage">All Production</Link></MenubarTrigger>
        <div className='flex border-none'>
        <Search className="bg-white rounded-l" />
        <input type='text'  placeholder='what you are looking for  ' className='rounded-r' />
        </div>
        <div className="p-2 rounded-full bg-gray-300  px-2 ">
            <ShoppingCart className="relative" />
            <span className="absolute top-3 right-35 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
              0
            </span>
          </div>
        {/* <MenubarContent>
          <MenubarItem>
            Clothes 
            <MenubarShortcut>Clothes</MenubarShortcut> 
          </MenubarItem>
          <MenubarItem>Shoes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Kids</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>All Production</MenubarItem>
        </MenubarContent> */}
      </MenubarMenu>
      {/*Mobile Navbar*/}
      <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size="25"/>
                    </div>
    </Menubar>

    {/* Mobile Menu*/}
    <div className= {`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "}`}>
    <div className={`${nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white" : "fixed left-[-100%] top-0 p-15 ease-in duration-500 "} `}>
            <div className="flex w-full items-center justify-between">
            
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-150">
                <AiOutlineClose/>
            </div>
            </div>
            <div className="border-b border-gray-300 my-6">
                <p className="w-[90%] md:w-[95%] py-4">E Commerce</p>
            </div>
            <div className="py-4 flex-col ">
                <ul className="uppercase text-sm">
                    <a  className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#"}>
                        <li className="py-4 " id='male'>Male</li>
                    </a>
                    <a className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#"}>
                        <li className="py-4 " id='female'>Female</li>
                    </a>
                    <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
                        <li className="py-4 " id='kids'>Kids</li>
                    </a>
                    <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
                        <li className="py-4 " id='productions'>All Productions</li>
                    </a>
                    
                </ul>
              </div>
            </div>
      </div>
  </div>
  )
}

export default Navbar;
