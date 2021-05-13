import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Whatsapp.css";
function Whatsapp() {
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
    <div className="whatsapp">
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
          <h1>Whatsapp Clone</h1>
          <h4>Messaging App</h4>
        </div>
      </div>
      <div className="image">
        <div className="whatsapp__image "></div>
      </div>
      <div className="facebook__description">
        <h1 className="facebookapp__title">Whatsapp Clone</h1>
        <h1 className=" facebookapp__bold">
          The Whatsapp clone is one of the most interesting project i ever made.
          The UX is very simple to use. The app makes the users connect to the
          whole world. The app is build by using ReactJS.
        </h1>
        <p>
          The main goal of the app is to communicate with the people by sending
          messages. The user can create multiple rooms or he can send the
          message in existed rooms. The messages are sent very fast and reflect
          in the app very soon. Everything is real-time. Here i have used an api
          called DicebearAvatars, which will give avatars for each room
          randomly.
        </p>
      </div>
      <div className="contact__social__links facebookapp">
        {/* <div className="contact__social__link  facebookapp"> */}
        <a href="https://github.com/RishikeshPolasa/whastsappclone">Github</a>
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

export default Whatsapp;
