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
import Profile from '../public/images/profile.svg';
import ProfileWoman from '../public/images/profile-woman.svg';




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

    <section id="reviews-62">
        <div className="cs-container">
            <div className="cs-content">
                <span className="cs-topper">Our Reviews</span>
                <h2 className="cs-title">Words From Our Students/Parents</h2>
                <p className="cs-text">
                    Check out what some of my students and/or their parents have to say about my teaching! I strive to make sure each student gets the best learning experience whether in-person or online.
                </p>
            </div>
            <ul className="cs-card-group">
                <li className="cs-item">
                    <div className="reviews-home-image">
                        <Image className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={Profile} alt="profile" width="68" height="68" />
                    </div>
                    <span className="cs-name">Elizabeth Pile</span>
                    <span className="cs-desc">Texas</span>
                    <p className="cs-item-text">
                    My eight year old daughter started taking piano lessons (virtually) from Kelley this past year and I have been so impressed with her progress.  Kelley makes piano lessons fun but also knows how to motivate my daughter to practice and give her best effort.  I also really appreciate that Kelley is able to conduct the lessons in Cantonese as this provides a wonderful language practice opportunity.  We are excited to continue with Kelley next year!
                    </p>
                </li>
                <li className="cs-item">
                    <div className="reviews-home-image">
                        <Image className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={ProfileWoman} alt="profile" width="68" height="68" />
                    </div>
                    <span className="cs-name">Amanda Greig</span>
                    <span className="cs-desc">California</span>
                    <p className="cs-item-text">
                    Kelley Wong is a fantastic piano teacher !  I take Zoom lessons regularly from him and he has done a lot to improve my technical skills and introduce me to more modern composers and other styles of music, beyond just classical.  He alway provides helpful feedback and recommendations, clearly explaining things in a way that I can easily understand.  I sincerely appreciate Kelley’s patience and professionalism, and enthusiastically recommend him for any adult students and remote lessons.
                    </p>
                </li>
                <li className="cs-item">
                    <div className="reviews-home-image">
                        <Image className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={ProfileWoman} alt="profile" width="68" height="68" />
                    </div>
                    <span className="cs-name">Anna P.</span>
                    <span className="cs-desc">Texas</span>
                    <p className="cs-item-text">
                    
                    Kelley has been the BEST piano teacher to my 2 young daughters.  We live in another province and conduct lessons over Zoom and it's been working out great! The girls love their time with him.
                    He is not only a gifted and phenomenal pianist, but he's also a really down to earth, kind, patient and positive instructor.  He also breaks down concepts to make it easier to learn for the little ones or beginners.
                    I would never hesitate to recommend Kelley!
                    </p>
                </li>
            </ul>
            <a aria-label="read more reviews" href="" className="cs-button-solid">Read More</a>
        </div>
    </section>
    </>
  );
}