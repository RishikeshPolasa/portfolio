import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mcart.css";

function Mcart() {
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
    <div className="mcart">
      <div className="mcart__links">
        <div className="mcart__link">
          <Link className="mcart__link" to="/work">
            <h1 className="mcart__text">rishi.</h1>
            <span className="mcart__hide">rishi.works</span>
          </Link>
        </div>
      </div>
      <div className="largetext">
        <div className="mcart__largetext">
          <h1>Mcart </h1>
          <h4>The Shopping Website</h4>
        </div>
      </div>
      <div className="image">
        <div className="mcart__image"></div>
      </div>
      <div className="facebook__description">
        <h1 className="mcart__title">Mcart</h1>
        <h1 className=" mcart__bold">
          Mcart is a shopping website. It is built using reactjs and firebase.
          The Shopping website has three different sections. The user can like
          the products and check out the products. The total amount of the price
          will be displayed on the right side of the checkout page. The favorite
          products will be moved to the Favourite page.
        </h1>
        <p>
          The main theme of this project is the user can log in with three
          different types. Google and Facebook authentication using firebase and
          email OTP verification using Emailjs.
        </p>
      </div>
      <div className="contact__social__links mcart">
        {/* <div className="contact__social__link  mcart"> */}
        <a href="https://github.com/RishikeshPolasa/Mcart">Github</a>
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

export default Mcart;
