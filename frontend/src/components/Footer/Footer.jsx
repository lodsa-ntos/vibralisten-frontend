import React from "react";
import { Link } from "react-router-dom";
import getActivePage from "../Header/ActiveEffect";
import { FaDribbble } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import "../Header/ActiveEffect";
import "./Footer.css";

const Footer = () => {
  const activePage = getActivePage();
  return (
    <React.Fragment>
      <div className="footer-content">

        <div className="footer-social-media-area">
          <p className="social-media-links">Links</p>
          <div className="footer-social-media">
            <div className="dribbble-icon">
              <a href="https://dribbble.com/LodneySantos" 
              target="_blank"
              rel="noopener noreferrer">
              <FaDribbble /></a>
            </div>
            <div className="github">
            <a href="https://github.com/lodsa-ntos/youtube-to-mp3-converter" 
              target="_blank"
              rel="noopener noreferrer">
              <BsGithub /></a>
            </div>
          </div>

          <p className="inspiring-phrase">Designed to evolve, built to inspire.</p>
        </div>
        {/* Logo */}
        <div className="footer-logo-container">
          <Link to="/home">
            <img
              src="Logo/music_symbol_dark_mode.svg"
              alt="Music Symbol"
              className="footer-logo-image"
            />
            
            <div className="footer-logo-text">
              <p className="slogan-footer">Listen. Feel. Download.</p>
              <h1 className="footer-logo">
                <span className="footer-vibra">VIBRA</span>
                <span className="footer-liste">LISTE</span>
                <span className="footer-vibra">N</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-list-footer">
            <li>
              <Link to="/home" className={activePage === "home" ? "nav-item-footer active" : "nav-item-footer"}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={activePage === "about" ? "nav-item-footer active" : "nav-item-footer"}>About</Link>
            </li>
            <li>
              <Link to="/faqs" className={activePage === "faqs" ? "nav-item-footer active" : "nav-item-footer"}>FAQs</Link>
            </li>
            <li>
              <Link to="/contact" className={activePage === "contact" ? "nav-item-footer active" : "nav-item-footer"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-all-rights">
        <div className="footer-left">
          <p className="footer-vibralisten">
            © 2025 VIBRALISTEN. Built with passion. 🚀
          </p>
        </div>

        <div className="footer-center">
          <img
            src="Logo/music_symbol_dark_mode.svg"
            alt="Music Symbol"
            className="footer-logo-short"
          />
        </div>
        
        <div className="footer-rigth">
        <Link to="/therms"><span className="footer-terms"
            ><MdOutlinePrivacyTip className="footer-icon-terms" /> 
            Terms
          </span></Link> | <Link to="/privacy"><span className="footer-privacy">Privacy</span></Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;