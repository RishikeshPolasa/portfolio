import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__links">
        <div className="contact__link">
          <Link className="contact__link" to="/">
            <h1 className="contact__text">rishi.</h1>
            <span className="contact__hide">rishi.works</span>
          </Link>
        </div>
      </div>
      <div className="largetext contact__large">
        <div className="contact__largetext">
          <h1>Let's make something great!</h1>
        </div>
      </div>
      <div className="description">
        <h1 className="title">Contact</h1>
        <p>
          I'm seeking out opportunites to collaborate with companies /
          individuals to work with them. I want to bring my collective design to
          the table to solve the real business-problems.
        </p>
        <p>I'm a fast learner and open-minded person.</p>
        <p>Feel free to reach out through any platforms bellow:</p>
      </div>
      <div className="contact__social__links">
        {/* <div className="contact__social__link"> */}
        <a href="https://github.com/RishikeshPolasa" target="_blank">
          Github
        </a>
        {/* </div> */}
        {/* <div className="contact__social__link"> */}
        <a href="https://www.linkedin.com/in/rishikeshpolasa/" target="_blank">
          linkedin
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
