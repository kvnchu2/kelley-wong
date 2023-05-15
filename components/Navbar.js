import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Kinwithkevin from "../public/images/kinesiology-with-kevin-high-resolution-logo-color-on-transparent-background.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Testimonials", href: "/testimonials"},
  { text: "Contact", href: "/contact" },
  { text: "FAQ", href: '/faq'}
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);

  return (
    <div id="navigation">
    <div aria-hidden="true" className="background-color-div">
    </div>
    <div className="container">
        

        
        <nav id="navbar-menu" className="">
            <ul>
                <li><Link href="/"><a className="active">Home</a></Link></li>
                <li><Link href="/"><a className="">Home</a></Link></li>
                <li><Link href="/"><a className="">Home</a></Link></li>
                <li><Link href="/"><a className="">Home</a></Link></li>
                <li><Link href="/"><a className="">Home</a></Link></li>
                <li><Link href="/"><a className="">Home</a></Link></li>
            </ul>
        </nav>
        
        <button className="hamburger-menu">
            <span aria-hidden="true"></span>
        </button>
    </div>
</div>
  );
};

export default Navbar;
