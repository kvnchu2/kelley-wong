import React from "react";
import Image from "next/image";


const StudioLessons = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Studio Lessons</h1>
    </section>

    <section id="reviews-727">
        <div className="cs-container">
            <div className="cs-content">
                <span className="cs-topper">Testimonials</span>
                <h2 className="cs-title">Trusted by Thousand of People & Companies</h2>
                <p className="cs-text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <ul className="cs-card-group">
                <li className="cs-item">
                    <Image className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/yellow-quote.svg" alt="quote icon" aria-hidden="true" width="40" height="38" loading="lazy" decoding="async" />
                    <h3 className="cs-h3">Loving the color!</h3>
                    <p className="cs-item-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste vitae, aliquam temporibus modi libero dolorem rerum? Dolore soluta eligendi mollitia. Doloribus et exercitationem cupiditate?
                    </p>
                    <span className="cs-name">Daniel</span>
                </li>
                <li className="cs-item">
                    <Image className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/yellow-quote.svg" alt="quote icon" aria-hidden="true" width="40" height="38" loading="lazy" decoding="async" />
                    <h3 className="cs-h3">Affordable</h3>
                    <p className="cs-item-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iste vitae, aliquam temporibus modi libero dolorem rerum? Dolore soluta eligendi mollitia. Doloribus et exercitationem cupiditate?
                    </p>
                    <span className="cs-name">Daniel</span>
                </li>
            </ul>
        </div>
    </section>
                                
  </>
  );
};

export default StudioLessons;