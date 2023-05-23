import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import logoLight from "../public/images/logo-light.png";
import logoBlue from "../public/images/logo-blue.png";
import {useRouter} from 'next/router';

const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const { asPath } = useRouter();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, [asPath]);

  return (
    <div id="navigation">
    <div aria-hidden="true" className={scrolledNav ? "background-color-div scrolled" : "background-color-div"}>
    </div>
    <div className="container">
        
        <Link href="/">
          <a className={scrolledNav ? "logo scrolled" : "logo"} aria-label="click to go to home page">
                <div className="light-logo">
                  {/* <Image className="light" aria-hidden="true" src={logoLight} decoding="async" alt="logo" width="221" height="66" /> */}
                  <p>Kelly Wong | Piano Studio</p>
                </div>
                <div className="dark-logo">
                  {/* <Image aria-hidden="true" src={logoBlue} decoding="async" loading="lazy" alt="logo" width="221" height="66" /> */}
                  <p>Kelley Wong | Piano Studio</p>
                </div>
          </a>
        </Link>
          <nav id="navbar-menu" className={ menuClicked ? "open" : ""}>
            <div className={ scrolledNav ? "navScrolled" : "navNotScrolled"}>
              <ul>
                  <li><NavItem href="/" text="Home"><a className="active">Home</a></NavItem></li>
                  <li><NavItem href="/about" text="About"><a className="">About</a></NavItem></li>
                  <li><NavItem href="/lessons" text="Lessons"><a className="">Lessons</a></NavItem></li>
                  <li><NavItem href="/testimonials" text="testimonials"><a className="">Testimonials</a></NavItem></li>
                  <li><NavItem href="/contact" text="contact"><a className="">Contact</a></NavItem></li>
              </ul>
            </div>
          </nav>
        
        <button className={ menuClicked ? "hamburger-menu clicked" : "hamburger-menu"} onClick={() => setMenuClicked(!menuClicked)}>
            <span aria-hidden="true"></span>
        </button>
    </div>
</div>
  );
};

export default Navbar;
