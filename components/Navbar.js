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
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div id="navigation">
    <div aria-hidden="true" className="background-color-div">
    </div>
    <div className="container">
        

        
        <nav id="navbar-menu" className={ menuClicked ? "open" : ""}>
            <ul>
                <li><NavItem href="/" text="Home"><a className="active">Home</a></NavItem></li>
                <li><NavItem href="/about" text="About"><a className="">About</a></NavItem></li>
                <li><NavItem href="/faq" text="Faq"><a className="">Faq</a></NavItem></li>
                <li><NavItem href="/testimonials" text="testimonials"><a className="">Testimonials</a></NavItem></li>
                <li><NavItem href="/contact" text="contact"><a className="">Contact</a></NavItem></li>
            </ul>
        </nav>
        
        <button className={ menuClicked ? "hamburger-menu clicked" : "hamburger-menu"} onClick={() => setMenuClicked(!menuClicked)}>
            <span aria-hidden="true"></span>
        </button>
    </div>
</div>
  );
};

export default Navbar;
