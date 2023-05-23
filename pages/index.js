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
import KelleyWong from '../public/images/kelley-wong.jpg';




export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Experience the joy of playing the piano</h1>
                  <p>
                  Whether you are a beginner or seeking to refine your skills, my tailored lessons will help you create and experience music in a whole new way
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Book Now
                        </div>
                      </Link>
                      
                      <a className="call-now" href="tel:778-838-6489">
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
    
    <section id="sbsr-579">
        <div className="cs-container">
            <picture className="cs-picture">
                
                {/* <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
               
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source> */}
                <div className="kelley-wong">
                <Image loading="lazy" decoding="async" src={KelleyWong} alt="room" width="494" height="700"></Image>
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">What We Do</span>
                <h2 className="cs-title">Private Piano and Music Theory Teacher</h2>
                <p className="cs-text">
                I am a private piano and music theory teacher in Vancouver with over 20 years of teaching experience and 30 years of playing and performing experience.  I teach piano with enthusiasm, patience, and commitment so we can encourage your child to fully appreciate the beauty of music and sound.

                When teaching, my motivation is seeing students overcome new challenges in learning music, enjoying the music they play, and having fun on the piano.

                </p>
                <p className="cs-text">
                Sharing my love for music with students and creating a tailored teaching approach for each of them has led my students to passing their Royal Conservatory of Music exams with honours and distinctions.  The students I work with also excel in auditions, recitals, festivals, and performances.

                </p>
                <a href="" className="cs-button-solid">Get Free Quote</a>
            </div>
        </div>
    </section>
    </>
  );
}