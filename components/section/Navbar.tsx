import React from 'react'
import Image from 'next/image';
import Logo from '/public/images/Logo.jpg';
import { Search, ShoppingCart } from "lucide-react";
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


const  Navbar= () => {
  return (
    <Menubar className='h-12 py-10 gap-x-10  text-sm '>
      <div className='py-5 px-8 '>
        <Image src={Logo} className='items-center mx-20 ' w-140 h-25 alt="logo" loading='lazy' ></Image>
      </div>
  <MenubarMenu>
    <MenubarTrigger>Female</MenubarTrigger>
    <MenubarTrigger>Male</MenubarTrigger>
    <MenubarTrigger>Kids</MenubarTrigger>
    <MenubarTrigger> <Link href="./Prodpage.tsx">All Production</Link></MenubarTrigger>
    <div className='flex border-none'>
    <Search className="bg-white rounded-l" />
    <input type='text'  placeholder='what you are looking for  ' className='rounded-r' />
    </div>
    <div className="p-2 rounded-full bg-gray-300  px-2 ">
        <ShoppingCart className="relative" />
        <span className="absolute top-3 right-40.3 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
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
</Menubar>
  )
}
export default Navbar;
