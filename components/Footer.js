import Link from "next/link";
import Kinwithkevin from "../public/images/kinesiology-with-kevin-high-resolution-logo-color-on-transparent-background.png";
import Image from "next/image";
import Pin from "../public/images/pin.svg";
import FooterPhone from "../public/images/footer-phone.svg";
import Email from "../public/images/email.svg";

export default function footer() {

return (
  <>
  <footer id="cs-footer-272">
      <div className="cs-container">
          
          <div className="cs-logo-group">
              <a aria-label="go back to home" className="cs-logo" href="">
                  
                  <h2>Kelley Wong | Piano Studio</h2>
              </a>
              <p className="cs-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum tincidunt vitae velit dolor cras tellus nisl habitant. Consectetur pellentesque dignissim sed amet.
              </p>
              <div className="cs-social">
                  <a className="cs-social-link" aria-label="visit google profile" href="">
                      <div className="social-icon">
                        <Image class="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg" alt="google" width="11" height="11" />
                      </div>
                  </a>
                  <a className="cs-social-link" aria-label="visit facebook profile" href="">
                      <Image class="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg" alt="facebook" width="6" height="11" />
                  </a>
                  <a className="cs-social-link" aria-label="visit instagram profile" href="">
                      <Image className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg" alt="instagram" width="11" height="11" />
                  </a>
              </div>
          </div>
          
          <ul className="cs-nav">
              <li className="cs-nav-li">
                  <span className="cs-header">Sitemap</span>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">About</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Services</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Portfolio</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Contact</a>
              </li>
          </ul>
          <ul className="cs-nav">
              <li className="cs-nav-li">
                  <span className="cs-header">Services</span>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">About</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Services</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Portfolio</a>
              </li>
              <li className="cs-nav-li">
                  <a className="cs-nav-link" href="">Contact</a>
              </li>
          </ul>
          
          <ul className="cs-contact">
              <li className="cs-nav-li">
                  <span className="cs-header">Contact</span>
              </li>
              <li className="cs-contact-li">
                  <a className="cs-contact-link cs-address" href="">
                      123 Avenue Street<br></br> Oak Harbor, WA 98101
                  </a>
              </li>
              <li className="cs-contact-li">
                  <a className="cs-contact-link" href="tel: 123-456-7890">(123) 456-7890</a>
              </li>
              <li className="cs-contact-li">
                  <a className="cs-contact-link" href="mailto:info@codestitch.com">info@codestitch.com</a>
              </li>
          </ul>
      </div>
  </footer>
                                
  </>
  );
}