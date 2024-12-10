// import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <div className="Container contact  my-4" id="contact">
        <h1 className="exText"> Contacts </h1>
        <div
          className="icon d-flex justify-content-center align-items-center my-4"
          data-aos="zoom-in"
          data-duration="1000"
        >
          <a
            href="https://www.instagram.com/prashant_rajput732/?next=%2F"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/prashantevercool"
            target="_blank"
            className="items"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-singh-266344196/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://x.com/Prashan19678711"
            target="_blank"
            className="items"
          >
            <FaTwitter className="icons" />
          </a>
          <a
            href="https://github.com/PrashantRajput7372"
            target="_blank"
            className="items"
          >
            <BiLogoGithub className="icons" />
          </a>
          <a
            href="mailto:prashantsingh113113@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
