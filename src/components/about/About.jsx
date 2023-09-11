import React from "react";
import "./about.css";
import logo from "../../assets/logo/mini-dark.png";
import { SiPaloaltonetworks } from "react-icons/si";
import { GoOrganization } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
const About = () => {
  return (
    <section id="about">
      <h2 className="text-light">About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiPaloaltonetworks className="about__icon" />
              <h5>Experiance</h5>
              <small>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
                {" "}
              </small>
            </article>
            <article className="about__card">
              <GoOrganization className="about__icon" />
              <h5>Clients</h5>
              <small>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
                {" "}
              </small>
            </article>
            <article className="about__card">
              <RiTeamFill className="about__icon" />
              <h5>Projects</h5>
              <small>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
                {" "}
              </small>
            </article>
          </div>
          <p>
            What is Lorem Ipsum? 
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
