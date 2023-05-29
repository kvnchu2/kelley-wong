import React from "react";
import Image from "next/image";
import Kelley from "../public/images/about-kelley.jpg";


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
            <Image loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg" alt="body builder" width="500" height="552" aria-hidden="true" />
        </picture>
        <div className="cs-content">
            <span className="cs-topper">Small Group Training</span>
            <h2 className="cs-title">Make your circle healthier together</h2>
            <p className="cs-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.
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
            <Image loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg" alt="body builder" width="500" height="552" aria-hidden="true" />
        </picture>
        <div className="cs-content">
            <span className="cs-topper">Small Group Training</span>
            <h2 className="cs-title">Make your circle healthier together</h2>
            <p className="cs-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.
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
            <Image loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/body-builder.jpg" alt="body builder" width="500" height="552" aria-hidden="true" />
        </picture>
        <div className="cs-content">
            <span className="cs-topper">Small Group Training</span>
            <h2 className="cs-title">Make your circle healthier together</h2>
            <p className="cs-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.
            </p>
            <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a>
        </div>
    </div>
</section>
                                
  </>
  );
};

export default About;