import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import Car from '../public/images/car-svgrepo-com.svg';
import Calendar from '../public/images/calendar-svgrepo-com.svg';
import Money from '../public/images/money-svgrepo-com.svg';
import House from '../public/images/house-solid.svg';
import MusicSolid from '../public/images/music-solid.svg';
import DesktopSolid from '../public/images/desktop-solid.svg';




export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Experience the joy of playing the piano</h1>
                  <p>
                  Whether you're a beginner or seeking to refine your skills, our tailored lessons will empower you to reach new heights
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Book Now
                        </div>
                      </Link>
                      
                      <a className="call-now" href="tel:555-213-9120">
                          {/* <div className="light">
                            <Image decoding="async" src={phone} alt="" aria-hidden="true" width="21" height="21"/>
                          </div> */}
                          <div className="dark">
                            <Image className="dark" decoding="async" src={phoneDark} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="group">
                              <span className="text">Call Now</span>
                              <span className="number">(778) 838-6489</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <section className="services-top">
        
        <div className="card">
            <picture className="picture">
                <Image src={House} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Home Lessons</h2>
            <p>
            Teaching in-home lessons pending on location and scheduling
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={MusicSolid} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Studio Lessons</h2>
            <p>
            Piano lessons are held in either one of my two studios (Vancouver and Coquitlam)
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={DesktopSolid} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Virtual Lessons</h2>
            <p>
            Personalized instruction in piano playing through online platforms
            </p>
        </div>
    </section>
    
    
    </>
  );
}