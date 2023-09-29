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
        <a target="_blank" href="https://airbnb-clone-three-lake.vercel.app/" rel="noreferrer"><img src={Portfolio1} alt="" className="worksImg" /></a>
        <a target="_blank" href="https://pkc2001.github.io/food-delivery-website/" rel="noreferrer"><img src={Portfolio2} alt="" className="worksImg" /></a>
        <a target="_blank" href="https://amazon-clone-bice-three.vercel.app/" rel="noreferrer"><img src={Portfolio3} alt="" className="worksImg" /></a>
        <a target="_blank" href="https://pkc2001.github.io/to-do-app/" rel="noreferrer"><img src={Portfolio4} alt="" className="worksImg" /></a>
        <a target="_blank" href="https://pkc2001.github.io/youtube-clone/" rel="noreferrer"><img src={Portfolio5} alt="" className="worksImg" /></a>
        <a target="_blank" href="https://pkc2001.github.io/portfolio-website-v2/" rel="noreferrer"><img src={Portfolio6} alt="" className="worksImg" /></a>
      </div>
      <div className="achi">
        <h1 className="worksTitle">My Achievements</h1>
        <p className="worksDesc">
          <span>
            1. Image Classification Using Deep Learning Algorithms for Cotton
            Crop Disease Detection IEEE The Paper was presented at ICDCECE
            conference and published at IEEE Explore digital library.
            <Link>https://ieeexplore.ieee.org/document/9792911</Link>
          </span>
          <div className='line'></div>
          <span>
            2. Image Classification Using Deep Learning Algorithms for Covid-19
            Detection. Copyright Grant Copyright Grant on the Project.
            Registration Number[ L107015/2021 ].
            <Link>https://drive.google.com/file/d/1aukOFKilOnEGcCbFWOul5VW9AwiSM5aM/view</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default works;