import React from "react";
import Image from "next/image";
import KelleyStudio from "../../public/images/kelley-studio.jpg";
import Studio from "../../public/images/studio-lessons.jpg";


const StudioLessons = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Studio Lessons</h1>
    </section>

    <section id="RTsbs-581">
        <div className="cs-container">
            <picture className="cs-picture">
                
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
               
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                <div className="triplet-sidebyside">
                    <Image loading="lazy" decoding="async" src={KelleyStudio} alt="room" width="494" height="700" />
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">Studio Lessons</span>
                <h2 className="cs-title">Studio and Terms</h2>
                <p className="cs-text">
                    Piano lessons are held in either one of my two studios, and students are welcome to learn in the location closest to them.  My studios are located in Vancouver and Coquitlam, and I also teach in-home lessons pending on location and scheduling.
                </p>
                <p className="cs-text">
                I have three terms set up throughout the year:
                </p>
                <ul>
                    <li>Fall Term - September to January</li>
                    <li>Spring Term - February to June</li>
                    <li>Summer Term - July and August (Optional)</li>
                </ul>
                <p className="cs-text">
                Summer and winter breaks are scheduled into the Fall and Summer Terms, each between two to five weeks long.  Students who wish to continue lessons through the breaks for special circumstances are welcome to upon discussion and mutual agreement. 
                </p>
                <a href="" className="cs-button-solid">Get Free Quote</a>
            </div>
        </div>
    </section>
                                    

    <section id="RTsbsr-581">
        <div className="cs-container">
            <picture className="cs-picture">
                
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                <div className="triplet-sidebyside">
                    <Image loading="lazy" decoding="async" src={Studio} alt="room" width="494" height="700" />
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">Studio Lessons</span>
                <h2 className="cs-title">Teaching Methods</h2>
                <p className="cs-text">
                I welcome beginner, intermediate, and advanced level students to my studios, and meet potential new students for an initial interview and audition.  I tailor each lesson plan based on the Royal Conservatory of Music and the London College of Music curricula, the goals of the student, and their musical interests.
                </p>
                <p className="cs-text">
                
                My teaching methods are centred on helping students achieve technical excellence, as well as artistic development.  During lessons, I help students focus on:
                </p>
                <ul>
                    <li>playing with clear musical intonation and intention</li>
                    <li>learning to control the touch, pressure, and tone of each note</li>
                    <li>helping students listen to their own music to self-correct errors and recognize areas for improvement</li>
                    <li>emphasizing sight reading and musicianship</li>
                    <li>pursuing, challenging, and expanding skills to achieve the next level of technical playing</li>
                </ul>
                
                <p className="cs-text">
                    As a piano teacher, I aim to help students not only acquire a strong basic foundation for playing proficiently, but to also understand the musical elements and context of every piece they learn.  Above all, I encourage students to appreciate and enjoy the music they play.
                </p>
                <p className="cs-text">
                    New students are currently being accepted.  Contact me to schedule an interview and audition.
                </p>
                <a href="" className="cs-button-solid">Get Free Quote</a>
            </div>
            
        </div>

        

        
    </section>
                                
   
  </>
  );
};

export default StudioLessons;