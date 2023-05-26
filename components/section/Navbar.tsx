import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "../ui/menubar"

const  Navbar= () => {
  return (
    <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Female</MenubarTrigger>
    <MenubarTrigger>Male</MenubarTrigger>
    <MenubarTrigger>Kids</MenubarTrigger>
    <MenubarTrigger>All Production</MenubarTrigger>
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
