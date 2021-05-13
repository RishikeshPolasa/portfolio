import React from "react";
// import { TweenMax, TimelineLite, Power3 } from "gsap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__links">
        {/* <div className="link"> */}
        <Link to="/about" className="link white one">
          <h1 className="text">Hello.</h1>
          <span className="hide white">About</span>
        </Link>
        {/* </div> */}

        <Link to="/work" className="link two">
          <h1 className="text">I am</h1>
          <span className="hide">work</span>
        </Link>
        <Link to="/contact" className="link three">
          <h1 className="text">Rishikesh</h1>
          <span className="hide">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
