import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import Resume from "./Assests/rishi_resume (2).pdf";
import "antd/dist/antd.css";
import "./About.css";
function About() {
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
    <div className="about">
      <div className="about__links">
        <div className="about__link">
          <Link className="about__link" to="/">
            <h1 className="about__text">rishi.</h1>
            <span className="about__hide">rishi.works</span>
          </Link>
        </div>
      </div>
      <div className="largetext">
        <div className="about__largetext">
          <h1>I design & build web apps</h1>
        </div>
      </div>
      <div className="image">
        <div className="background__image"></div>
      </div>
      <div className="description">
        <h1 className="title">About</h1>
        <h1 className="bold">
          Hi, I'm Rishikesh Polasa currently pursuing undergraduate from
          MCET,Hyderabad.
        </h1>
        <p>
          You can also call me a programmer, Front-developer, video
          editor.Skilled in Data Structures, CPP,Front-end development.
        </p>
        <p>
          I prefer to keep learning, continue challenging myself, and do
          interesting things that matter.
        </p>
        <p>
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of stydy and artistic endeavors. I'm a fast learner, able to
          pick up new skills and juggle different projects and roles with
          relative ease.
        </p>
        <p>
          I would love to develop websites that help people to make life easier.
          I currently open for new opportunites.
        </p>
        <p>
          You can read more about skills, education and much more in the PDF
          attached bellow:
        </p>
      </div>
      <div className="contact__social__links">
        <a href={Resume} target="_blank">
          Download My resume
        </a>
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

export default About;
