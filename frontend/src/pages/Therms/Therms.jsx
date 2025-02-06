import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Therms.css";

const Therms = () => {
  return (
    <>
    <main>
    <div id="therms" className="therms-section">
      {/* spacing before the header */}
      <div className="home-above-header-spacing"></div>
      <Header />
      {/* spacing below the header */}
      <div className="home-below-header-spacing"></div>

      
        <h1>Terms of use</h1>

        <h4>1. Introduction</h4>
          <div>
            Welcome to VIBRALISTEN! These Terms of Use govern access to and use of our website, which offers an online tool for converting YouTube videos into MP3 files. By using this service, you agree to these terms. If you do not agree to any of the terms, please do not use the site.
          </div>

        <h4>2. Use of Service</h4>
          <ul className="service-topcs">
            <li>Functionality</li>

            <div>
            VIBRALISTEN lets you convert public YouTube videos to MP3 quickly and easily.
            </div>

            <li>User Responsibility</li>

            <div>
            VIBRALISTEN lets you convert public YouTube videos to MP3 quickly and easily.
            </div>

            <li>Functionality</li>

            <div>
            VIBRALISTEN lets you convert public YouTube videos to MP3 quickly and easily.
            </div>
          </ul>
    </div>
    </main>
    {/* Footer Section*/}
    <Footer className="footer-section-therms-page"/>
    </>
  );
};

export default Therms;