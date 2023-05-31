import React from "react";
import Image from "next/image";
import KelleyWong from "../../public/images/kelley-wong.jpg";
import Virtual from "../../public/images/virtual-lessons.jpg";
import Virtual2 from "../../public/images/virtual-lessons2.jpg";
import Virtual3 from "../../public/images/virtual-lessons3.jpg";


const VirtualLessons = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Virtual Lessons</h1>
    </section>

    <section id="RTsbs-581">
        <div className="cs-container">
            <picture className="cs-picture">
                
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
               
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                <div className="triplet-sidebyside">
                    <Image loading="lazy" decoding="async" src={Virtual} alt="room" width="494" height="700" />
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">Virtual Lessons</span>
                <h2 className="cs-title">Piano Lessons with Convenience</h2>
                <p className="cs-text">
                For the past several years, I have been teaching almost exclusively online via Zoom – both
                regular weekly lessons, theory courses, special workshops, and customized Masterclasses. My
                current online students are from across Canada, the United States, Europe, Asia and the Middle
                East. Many even live in the same city, but prefer the convenience, comfort, efficiency,
                accessibility, and distinct educational advantages of the online studio environment.
                </p>
                <p className="cs-text">
                I work with both children and adults online to achieve their music goals, building individualized
                learning programs, and using a unique, interactive, and structured approach to optimize the
                online format, promote engagement and interest, and build skills faster than in-person lessons.
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
                    <Image loading="lazy" decoding="async" src={Virtual2} alt="room" width="494" height="700" />
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">Virtual Lessons</span>
                <h2 className="cs-title">Does it Work?</h2>
                <p className="cs-text">
                Although the pandemic necessitated more and more lessons to go online, distance learning in
                music goes back much farther. Many music students had long been studying with a teacher in a
                different city or country via Skype or other virtual platforms. Musicians have also long been
                playing, collaborating and recording together digitally at a distance.
                </p>
                <p className="cs-text">
                There is a big misconception that online lessons are not as effective as in-person lessons, or
                that students miss out in some way from not having an in-person experience. After several
                years of working online with dozens of students around the world, I can say that online music
                learning is not only effective but builds musicianship much more quickly. There are several
                reasons why.
                </p>
                <p className="cs-text">First, so long as I can see and hear students (and I have perfect pitch), and they can see and
                hear me, online lessons are no different than in-person lessons. I diagnose errors, demonstrate
                technique, and play in the exact same way as I would during any in-person lesson. There is
                never a need for a teacher to physically manipulate or adjust a student&#39;s hands. A teacher
                wouldn’t/shouldn’t even do this in-person.</p>
                <p className="cs-text">Second, online students seem to develop more quickly, a stronger, deeper understanding of
                music. They are more independent. They do not rely on their teacher to write in dynamics or
                reminders, point out measures or other notes on the sheet music, etc. Because they learn to do
                these things more independently, they recognize cues and structures, musical elements, and
                read and understand music sooner and more readily. They are also then able to apply these
                skills sooner and more effectively when they practice on their own, learn other pieces and
                perform. As a result, I have seen students progress more quickly and confidently, and become
                stronger musicians.
                </p>
                <p className="cs-text">Third, the online music education environment presents the opportunity to use many engaging
                and effective teaching tools and resources. For example, I regularly use screen-sharing to cast
                music that I can markup and manipulate. I can demonstrate music theory concepts on the
                screen whiteboard with a simple click and draw. Lessons can easily include interactive music

                games and activities that teach music concepts. The learning environment can be richer, more
                dynamic and diverse.
                </p>
                <a href="" className="cs-button-solid">Get Free Quote</a>
            </div>
            
        </div>

        
    </section>

    <section id="RTsbst-581">
        <div className="cs-container">
            <picture className="cs-picture">
                
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"></source>
                <div className="triplet-sidebyside">
                    <Image loading="lazy" decoding="async" src={Virtual3} alt="room" width="494" height="700" />
                </div>
            </picture>
            <div className="cs-content">
                <span className="cs-topper">Virtual Lessons</span>
                <h2 className="cs-title">Try it out!</h2>
                <p className="cs-text">
                Online lessons offer students considerable advantages in learning and in scheduling flexibility.
                Students save significantly in travel time, and can learn in the comfort of their own home on
                their own piano. Post-pandemic, more than 50% of my former in-person students decided to
                stay on virtually, indefinitely, opting for the benefits of online lessons.
                </p>
                <p className="cs-text">
                I have also really enjoyed
                working increasingly with students living across Canada and worldwide, being exposed to new
                repertoire and musical traditions and new ways of learning and teaching, and expanding my
                studio’s international community of students. I always welcome students to try a few online
                trial lessons first to see if online learning is a good fit for you – no commitment to an entire
                term. You may be pleasantly surprised how well it works!
                </p>
                <a href="" className="cs-button-solid">Get Free Quote</a>
            </div>
        </div>
    </section>
                                
   
  </>
  );
};

export default VirtualLessons;