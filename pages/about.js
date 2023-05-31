import React from "react";
import Image from "next/image";
import Kelley from "../public/images/about-kelley.jpg";
import PianoEducation from "../public/images/piano-education.jpg";
import Performance from "../public/images/performance.jpg";

const About = ({abouts}) => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">About Kelley Wong</h1>
    </section>

   

<section id="RTsbs-71">
    <div className="cs-container">
        <picture className="cs-picture">
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder-m.jpg"></source>
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg"></source>
            <div className="about-picture">
                <Image loading="lazy" decoding="async" src={Kelley} alt="body builder" width="500" height="552" aria-hidden="true" />
            </div>
        </picture>
        <div className="cs-content">
            <span className="cs-topper">About Kelley Wong</span>
            <h2 className="cs-title">Personal Background</h2>
            <p className="cs-text">
            I am a pianist, collaborative pianist, and music educator living and teaching in Vancouver, British Columbia.  I am a Registered Music Teacher (RMT) under the British Columbia Registered Music Teachers' Association, and a member of the Canadian Federation of Music Teachers' Association.

            I have been involved in the Classical music scene for more than 25 years, with over 15 years of teaching experience.  As a pianist, I strive to understand the musical element, nuance, and context of every piece I play, and as a piano teacher, I encourage my students to grow the same appreciation and understanding for the music they play.

            I also hold a Masters Degree from the University of Cambridge in the United Kingdom, where I lived for some time. When I am not teaching or playing music, I enjoy running, exercising, baking, reading fiction novels, DIY projects and, above all, my favourite thing to do is spend time with my daughter!

            </p>
            <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a>
        </div>
    </div>
</section>
                                

<section id="RTsbsr-71">
    <div className="cs-container">
        <picture className="cs-picture">
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder-m.jpg"></source>
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg"></source>
            <div className="about-picture">
                <Image loading="lazy" decoding="async" src={PianoEducation} alt="body builder" width="500" height="552" aria-hidden="true" />
            </div>
        </picture>
        <div className="cs-content">
            <span className="cs-topper">About Kelley Wong</span>
            <h2 className="cs-title">Piano Education</h2>
            <p className="cs-text">
                ​The majority of my music education was completed through the Royal Conservatory of Music, where I had the privilege of studying under an instructor from the Associated Board of the Royal School of Music whose teaching reflected intense and comprehensive Classical methodologies that are typical of traditional European training.  Learning from someone who was a part of one of the world’s leading music exam boards, I began early in my piano career to focus on technical precision and dexterity, and recognized that skill development is closely tied to kinesthetic awareness between the pianist and the instrument.  As a performer and a teacher, I also continue to focus on using creative listening to enhance and achieve the highest standards in performance artistry.
            </p>
            <p className="cs-text">
                Upon receiving my Associate Diploma of Royal Conservatory in Piano Performance, I continued to study under England’s London examination board.  Through this, I have also completed advanced training in professional performance, receiving an Associate Diploma in Pianoforte Performance and an Associate Diploma in Pianoforte Pedagogy from the London College of Music at the University of West London.
            </p>
            <p className="cs-text">
                In 2015, I was invited by the Royal Conservatory of Music to become, and subsequently designated as, an Advanced Specialist in Piano, with senior-level expertise in piano education. I was also awarded the distinction of Advanced Specialist in Music Theory, for my years of experience teaching advanced harmony, composition, music analysis, and music history.
            </p>
            <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a>
        </div>
    </div>
</section>

<section id="RTsbst-71">
    <div className="cs-container">
        <picture className="cs-picture">
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder-m.jpg"></source>
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg"></source>
            <div className="about-picture">
                <Image loading="lazy" decoding="async" src={Performance} alt="body builder" width="500" height="552" aria-hidden="true" />
            </div>
        </picture>
        <div className="cs-content">
            <span className="cs-topper">Kelley Wong</span>
            <h2 className="cs-title">Piano Performance</h2>
            <p className="cs-text">
            Throughout my career, I have performed in many concerts and recitals, and have won top awards in music competitions such as the Kiwanis Music Festival, the Collage Festival, Student Performer’s Guild Festival, Burnaby Clef Music Festival, and more. Since stepping away from performances and competitions, I have dedicated myself to teaching privately in my two studios.

            In addition to maintaining active piano studios, I am a professional collaborative pianist, an accompanist for the Vancouver Kiwanis Music Festival, and I also work with various professional musicians in Vancouver.

            I am a current and founding member of the Vancouver Symphony Orchestra’s Stradivarious Legacy Circle, which was established in 2013 to recognize individuals who have made arrangements to leave a planned gift to the Vancouver Symphony Foundation.

            </p>
            <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a>
        </div>
    </div>
</section>
                                
  </>
  );
};

export default About;