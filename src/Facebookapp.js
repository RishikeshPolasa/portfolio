import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Facebookapp.css";

function Facebookapp() {
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
    <div className="facebookapp">
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
          <h1>Facebook Clone </h1>
          <h4>The app connects the whole world</h4>
        </div>
      </div>
      <div className="image">
        <div className="facebookapp__image"></div>
      </div>
      <div className="facebook__description">
        <h1 className="facebookapp__title">Facebook Clone</h1>
        <h1 className=" facebookapp__bold">
          Facebook clone is interesting project. Now-a-days, most of the people
          are using social media apps. which makes our life easier. Some of the
          apps are used to interact with friends and some are used to order
          electronic gadgets etc.
        </h1>
        <p>
          “Facebook clone" is an app used to interact with friends. The app is
          fast and smooth. The user can interact with every component in app.
          The main goal of the app is share user (images / text) in the app to
          communicate with the people. The user can like the posts also.
        </p>
      </div>
      <div className="contact__social__links facebookapp">
        {/* <div className="contact__social__link  facebookapp"> */}
        <a href="https://github.com/RishikeshPolasa/facebook-clone">Github</a>
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

export default Facebookapp;
