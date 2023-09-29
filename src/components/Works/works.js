import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import { Link } from "react-scroll";

const works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying my attention to the smallest details and making
        sure that my work is pixel perfect. I am excited to bring my skills and
        experience to help bussiness achieve their goals and create a strong
        online presence
      </span>
      <div className="worksImgs">
        <h4 className="project">Amazon Clone<a target="_blank" href="https://amazon-clone-bice-three.vercel.app/" rel="noreferrer"><img src={Portfolio3} alt="" className="worksImg" /></a></h4>
        <h4 className="project">To Do App<a target="_blank" href="https://pkc2001.github.io/to-do-app/" rel="noreferrer"><img src={Portfolio4} alt="" className="worksImg" /></a></h4>
        <h4 className="project">Youtube Clone<a target="_blank" href="https://pkc2001.github.io/youtube-clone/" rel="noreferrer"><img src={Portfolio5} alt="" className="worksImg" /></a></h4>
        <h4 className="project">Food Deliver Website<a target="_blank" href="https://pkc2001.github.io/food-delivery-website/" rel="noreferrer"><img src={Portfolio2} alt="" className="worksImg" /></a></h4>
        <h4 className="project">Portfolio Website v2<a target="_blank" href="https://pkc2001.github.io/portfolio-website-v2/" rel="noreferrer"><img src={Portfolio6} alt="" className="worksImg" /></a></h4>
        <h4 className="project">Airbnb Clone<a target="_blank" href="https://airbnb-clone-three-lake.vercel.app/" rel="noreferrer"><img src={Portfolio1} alt="" className="worksImg" /></a></h4>
      </div>
      <div className="achi">
        <h1 className="worksTitle">My Achievements</h1>
        <p className="worksDesc">
          <a href="https://ieeexplore.ieee.org/document/9792911" className="achiDesc">
            1. Image Classification Using Deep Learning Algorithms for Cotton
            Crop Disease Detection IEEE The Paper was presented at ICDCECE
            conference and published at IEEE Explore digital library.

          </a>
          <div className='line'></div>
          <a href="https://drive.google.com/file/d/1aukOFKilOnEGcCbFWOul5VW9AwiSM5aM/view" className="achiDesc">
            2. Image Classification Using Deep Learning Algorithms for Covid-19
            Detection. Copyright Grant Copyright Grant on the Project.
            Registration Number[ L107015/2021 ].
          </a>
        </p>
      </div>
    </section>
  );
};

export default works;
