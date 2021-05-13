import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Emoticons.css";
function Emoticons() {
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="facebookapp__links">
        <div className="facebookapp__link">
          <Link className="facebookapp__link" to="/work">
            <h1 className="facebookapp__text">rishi.</h1>
            <span className="facebookapp__hide">rishi.works</span>
          </Link>
        </div>
      </div>
      <div className="largetext">
        <div className="facebookapp__largetext">
          <h1>Matching Emoticons</h1>
          <h4>Memory Game</h4>
        </div>
      </div>
      <div className="image">
        <div className="emoticons__image"></div>
      </div>
      <div className="facebook__description">
        <h1 className="facebookapp__title">Matching Emoticons</h1>
        <h1 className=" facebookapp__bold">
          Matching Emoticons is an interesting project. The project is very
          simple to play. It tests the user's memory.
        </h1>
        <p>
          “Matching Emoticons" project test the user's memory. The user must
          unfilp all cards to complete the game. If the user's match is
          incorrect, then the cards auto filp. The game test how fast the user
          can take minimum flips to complete the game.
        </p>
      </div>
      <div className="contact__social__links facebookapp">
        {/* <div className="contact__social__link  facebookapp"> */}
        <a href="https://github.com/RishikeshPolasa/Guess-the-matching-emoticons">
          Github
        </a>
        {/* </div> */}
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

export default Emoticons;
