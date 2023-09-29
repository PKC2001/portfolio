import React, { useRef } from "react";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ds1r2h",
        "template_ocxl1xg",
        form.current,
        "6lF9cGycjNiD6S-N9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent")
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form onSubmit={sendEmail} className="contactForm" ref={form}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="name"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="email"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="msg"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <a target="_blank" href="https://www.instagram.com/pranav_chillawar/?igshid=YmMyMTA2M2Y%3D" rel="noreferrer"><img src={Instagram} alt="Instagram" className="link" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/pranav-chillawar-04078b1ab/" rel="noreferrer"><img src={Linkedin} alt="Linkedin" className="link" /></a>
          <a target="_blank" href="https://github.com/PKC2001" rel="noreferrer"><img src={Github} alt="Github" className="link" /></a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
