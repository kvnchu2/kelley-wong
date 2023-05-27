import React from "react";
import Image from "next/image";
import Profile from "../public/images/profile.svg";
import Stars from "../public/images/stars.svg";
import ProfileWoman from "../public/images/profile-woman.svg";

export default function Testimonials() {

  return (
  <>
    <section id="int-hero">
        <h1 id="home-h">Testimonials</h1>
    </section>

    <section id="reviews">
    <div className="container">
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={ProfileWoman} alt="" width="99" height="99" />
            </picture>
            <p>
            Kelley is a wonderful piano teacher. Not only is he inspiring to listen to, he is patient, kind, adaptive and flexible to his students' needs. He makes the lessons fun and exciting for the kids and truly cares about his students. As an adult, my lessons with Kelley are a highlight in the week. It's a stress relief and enjoyable to sit down and take time to myself and learn new music. It's also a great way to motivate my son to practice because we can to do it together! I have recommended Kelley to all my friends looking for a music teacher.
            </p>
            <div className="star-group">
            <span className="name">Heather Nyberg<span className="desc">Student</span></span>
                <picture>
                <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                </picture>
            </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                My child started taking lessons with Kelley two years back while looking for the "next level" teachers. The experience has been fantastic! He offers zoom lessons accommodating any time zone/school time restrictions. Kelley is committed, methodical and very passionate about teaching. He recommends various learning tracks based on student's comfort level. Highly recommended for remote lessons without compromising on quality.
                </p>
                <div className="star-group">
                <span className="name">Gijo Prems<span className="desc">Parent</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={ProfileWoman} alt="" width="99" height="99" />
                </picture>
                <p>
                I’m thrilled to write this review for Kelley Wong as a virtual piano student of his for the past year. He has been an attentive, engaging, and friendly music instructor in my later in life piano learning journey, and I look forward to our lessons. He really understands how to customize the learning experience to fit my goals, incorporate the musical stylings of requested composers or musical eras, as well as maintaining levity and fun in lessons. I highly recommend Kelley for virtual piano lessons if you get the chance to join his studio!
                </p>
                <div className="star-group">
                    <span className="name">Izzie Chea<span className="desc">Student</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={ProfileWoman} alt="" width="99" height="99" />
                </picture>
                <p>
                Kelley is a wonderful piano teacher. He is a very talented, patient and passionate teacher. Not only did he teach my children to play the piano, he also showed how to love and enjoy learning. They adore their teacher and I am very grateful for the strong foundation he gave them.
                </p>
                <div className="star-group">
                <span className="name">YC<span className="desc">Student</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={ProfileWoman} alt="" width="99" height="99" />
                </picture>
                <p>
                Kelley is a fantastic teacher! I started learning piano as an adult who was new to piano.  He made lessons fun and interesting. I felt as though I progressed quickly to playing songs I highly enjoyed. He is patient, encouraging and I would highly recommend him to anyone looking for lessons as a beginner or for those looking for advanced skills.
                </p>
                <div className="star-group">
                <span className="name">Kate Heays<span className="desc">Student</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                Kelley is a professional pianist with a full passion of  teaching and sharing the piano technique. He wrote detailed feedback after each lesson and inspired the students on how to enjoy music. His classes are fun and engaging. We are lucky to have him as the tutor.
                </p>
                <div className="star-group">
                    <span className="name">Sabrina Xiao<span className="desc">Parent</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
    </div>
</section>
    </>
  )
}