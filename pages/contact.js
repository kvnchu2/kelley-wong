import React from "react";

const Contact = () => {
  return (
    <>
    <section id="int-hero">
        <h1 id="home-h">Contact Business</h1>
    </section>

    <section id="form">
        <div className="left-section">
            <span className="topper">Kelley Wong Piano Studio</span>
            <h2>Schedule an Interview</h2>
            <p>Interviews at my studios are completely free of charge. This is an opportunity for me to meet the potential student, hear the student play and test technical skills, and for me to discuss my teaching philosophy, studio policies, and rates. During this interview, I will also outline my initial ideas on building an appropriate program and curriculum if the student were to take lessons with me. Please note that all students under the age of 18 must be accompanied to the interview by a parent or guardian.</p>
            <h2>Send a Message</h2>
            <p>Please feel free to contact me to further discuss how I might be able to assist you or your child in achieving musical goals.</p>
            {/* <form id="contact" name="Contact Form" method="post" data-netlify-recaptcha="true" data-netlify="true"> */}
            <form id="contact" name="Contact Form" method="post" action="https://formspree.io/f/myyagnzn">
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" aria-label="name" className="input1" name="name" placeholder="Full Name" type="text" tabIndex="1" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" aria-label="email" className="input1 right" name="email" placeholder="Email Address" type="email" tabIndex="2" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" aria-label="phone number" className="input1" name="phone" placeholder="Phone Number" type="tel" tabIndex="3" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input id="location" aria-label="location" className="input1 right" name="location" placeholder="Your Location" type="text" tabIndex="4" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="how">How did you hear about us</label>
                        <input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Us" type="text" tabIndex="5" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group textarea">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" aria-label="write your message" name="message" placeholder="Tell us about what you need help with" tabIndex="6" required></textarea>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                <p className="form-submit">
                    <button name="submit" type="submit" id="contact-submit" className="button-solid" data-submit="...Sending">Submit</button>
                </p>
            </form>
        </div>
        <div className="contact-right">
            <div className="info-group">
                <span className="heading">Location</span>
                <span className="info">Vancouver, Coquitlam, Worldwide via Zoom</span>
            </div>
            <div className="info-group">
                <span className="heading">Phone</span>
                <a className="info" href="tel:236-512-5182">(778) 838-6489</a>
            </div>
            <div className="info-group">
                <span className="heading">Email</span>
                <a className="info" href="mailto:info@email.com">info@kelleywongmusic.com</a>
            </div>
        </div>
    </section>
    </>
  );
};
export default Contact;
