// import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className=" nav_bar" data-aos="fade-down" data-aos-duration="2000">
        <div className="left nav_itemss">Prashant&apos;s Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experince" className="nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#project" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
