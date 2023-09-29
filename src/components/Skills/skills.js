import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS and Javascript, as well as designing softwares.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Technical Skills</h2> <p>HTML | CSS | Javascript | React Js | Tailwind CSS | Git & Github | GA & GTM | Python | SQL</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Soft Skills</h2> <p>Communication | Teamwork | Leadership | Problem-solving | Adaptability | Time management | Networking | Conflict resolution</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Languages</h2> <p>HINDI | ENGLISN | MARATHI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
