import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/components/navbar.modules.css";
import "../styles/home.modules.css";
import "../styles/root.modules.css";
import "../styles/about.modules.css";
import "../styles/contact.modules.css";
import "../styles/testimonials.modules.css";
import "../styles/reviews.modules.css";
import "../styles/components/dropdown.modules.css";
import "../styles/components/sidebyside.modules.css";
import "../styles/components/reversesidebyside.modules.css";
import "../styles/components/services-top.modules.css";
import "../styles/components/footer.modules.css";
import "../styles/components/triplet-sidebyside.modules.css";
import "../styles/components/reviews-home.modules.css";
import "../styles/onlinetelerehab/onlinetelerehabcontent.modules.css";
import "../styles/onlinetelerehab/onlinetelerehab.modules.css";
import "../styles/components/services.modules.css";
import "../styles/faq.modules.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
