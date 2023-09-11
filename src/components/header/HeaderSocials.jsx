import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsFacebook />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsYoutube />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
