// import React from 'react'
import Typed from "typed.js";
import hero from "../Components/image/hero.avif";
// import resume from "../../public/assets/PrashantResume2024.pdf"
import { useEffect, useRef } from "react";
const Home = () => {
  const el = useRef(null); // Create a ref to attach to the element

  useEffect(() => {
    // Create Typed instance when the component mounts
    const typed = new Typed(el.current, {
      strings: ["Hi there, I am Prashant Singh!"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      showCursor: false,
    });

    // Cleanup function to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array, so this effect runs only once when the component mounts

  return (
    <div className="container home my-4" id="home">
      <div className="left" data-aos="fade-right" data-aos-duration="2000">
        <h1 ref={el} style={{ color: "rgb(101,175,0.5)" }}></h1>

        <h3 className="my-1">
          A software engineer at TCS striving to make my dreams into reality.{" "}
        </h3>

        <h3 className="my-1">
          I am a passionate web developer and also a SAP Basis Consultant.
        </h3>

        <h3 className="my-1">Here&#39;s the quick insight in to my work.</h3>

        <div>
          <a href="/assets/PrashantResume2024.pdf" download>
            <button className="my-3 hButton">Download Resume PDF</button>
          </a>
        </div>
      </div>
      <div className="right" data-aos="fade-left" data-aos-duration="2000">
        <div className="img">
          <img src={hero} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
