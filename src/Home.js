import React, { useState, useEffect } from "react";
// import { TweenMax, TimelineLite, Power3 } from "gsap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__links">
        <div className="link white one">
          <h1 className="text ">Hello.</h1>

          <Link to="/about">
            <span className="hide ">About</span>
          </Link>
        </div>

        <Link to="/work" className="link two">
          <h1 className="text">I am</h1>
          <span className="hide">work</span>
        </Link>
        <Link to="/contact" className="link three">
          <h1 className="text">Rishikesh</h1>
          <span className="hide">Contact</span>
        </Link>
      </div>
      <div className="display__none" id="displayNone">
        <div className="one__none">
          <h1 className="white">Hello.</h1>
          <h1>I am</h1>
          <h1>Rishikesh</h1>
        </div>
        <div className="arrow"></div>
        <div className="links__none">
          <Link to="/about" className="link__none">
            <p className="white">About</p>
          </Link>
          <Link to="/work" className="link__none">
            <p>Work</p>
          </Link>
          <Link to="/contact" className="link__none">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
