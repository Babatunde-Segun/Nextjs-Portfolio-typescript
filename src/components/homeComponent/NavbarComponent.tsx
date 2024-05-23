"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import logo from "../../assets/image/nexus.png";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { useState } from "react";
// import { fadeIn } from "../framer-motion/animation";
import { motion } from "framer-motion";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Services",
    "Investment Plan",
    "Tools",
    "Market News",
    "SignUp",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="p-2 lg:p-3 flex space-between translate-y-[-25px] bg-secondary"
    >
      <NavbarContent className="lg:hidden pr-3 " justify="center">
        <NavbarBrand>
          {/* <p className="font-bold text-inherit">ACME</p> */}
          {/* <img src={logo} alt="nexus-logo" className="max-w-[7rem]" /> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:hidden " justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex gap-4 sm:text-2xl lg:text-3xl"
        justify="start"
      >
        <NavbarBrand className="mr-2 sm:mr-[12rem]">
          {/* <AcmeLogo /> */}
          {/*  */}
          {/* <p className="font-bold text-inherit lg:text-2xl">ACME</p> */}
          {/* <img
            src={logo}
            alt="nexus-logo"
            className="max-w-[6rem] sm:max-w-[7rem] lg:max-w-[8rem]"
          /> */}
        </NavbarBrand>
        <NavbarItem>
          <Link className="" color="foreground" href="#/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#/service" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#/investment-plan" className="">
            Investment Plan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#/tools" className="">
            Tools
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#/market-news" className="">
            Market News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#/contact" className="">
            Contact
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden  lg:flex">
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="hidden sm:end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex lg:flex">
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu className="items-end pt-[3rem] bg-secondary text-white ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="group" key={`${item}-${index}`}>
            <Link
              className="w-full text-white-700 group-hover:bg-accent"
              color={
                index === 2
                  ? "success"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
