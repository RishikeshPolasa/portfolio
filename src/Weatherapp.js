import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Weatherapp.css";

function Weatherapp() {
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
    <div className="weatherapp">
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
          <h1>Weather app </h1>
          <h4>App for current weather details</h4>
        </div>
      </div>
      <div className="image">
        <div className="weatherapp__image"></div>
      </div>
      <div className="facebook__description">
        <h1 className="facebookapp__title">Weathe App</h1>
        <h1 className=" facebookapp__bold">
          The Weather App is a intermediate project developed using ReactJS.
          This project is an interesting project for simply weather forecasting.
          The user can check the condition of the present-day climate
          probability and predict whether the day is a cloudy or sunny day.
        </h1>
        <p>
          The user can write down the any name of the city across the world in
          the app. The main goal of the app for weather forecasting. The API
          used in the app is openweatherapi. The weather results very fast. The
          background image change according to the city temperature which makes
          the app look cool.
        </p>
      </div>
      <div className="contact__social__links facebookapp">
        {/* <div className="contact__social__link  facebookapp"> */}
        <a href="https://github.com/RishikeshPolasa/weather-app">Github</a>
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

export default Weatherapp;
