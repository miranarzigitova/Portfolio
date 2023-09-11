import React from "react";
import "./header.css";
import CTA from "./CTA";
import LOGO from "../../assets/logo/mini-dark.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mira Narzhigitova</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={LOGO} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll
        </a>
      </div>
    </header>
  );
};

export default Header;
