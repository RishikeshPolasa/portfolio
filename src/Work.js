import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Work.css";

function Work() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="work">
      <div className="about__links">
        <div className="about__link">
          <Link className="about__link" to="/">
            <h1 className="about__text">rishi.</h1>
            <span className="about__hide">rishi.works</span>
          </Link>
        </div>
      </div>
      <div className="project__links">
        <div className="project__link">
          <Link to="/facebookapp">
            <h1>Facebook Clone App</h1>
            <span>Social media App</span>
          </Link>
        </div>
        <div className="project__link">
          <Link to="/weatherapp">
            <h1>Weather App</h1>
            <span>App for current weather details</span>
          </Link>
        </div>
        <div className="project__link">
          <Link to="/whatsapp">
            <h1>Whatsapp Clone</h1>
            <span>Messaging App</span>
          </Link>
        </div>
        <div className="project__link space">
          <Link to="/emoticons">
            <h1>Matching-emoticons</h1>
            <span>Memory Game</span>
          </Link>
        </div>
      </div>
      <div className="scroll-to-top">
        {isVisible && (
          <div onClick={scrollToTop}>
            <img
              src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
              alt="Go to top"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
