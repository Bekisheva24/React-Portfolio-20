import React from "react";
import "./about.scss";
import aboutImg from "../../images/about.jpg";

function About() {
  return (
    <div className="about component-space">
      <div className="container about__container">
        <div className="col__2">
          <img src={aboutImg} alt="" className="about__img" />
        </div>
        <div className="col__2">
          <h1 className="about__heading">About Me</h1>
          <div className="about__meta">
            <p className="about__txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              accusantium, voluptatum dignissimos aperiam tempore unde
              temporibus laudantium neque! Porro deserunt quidem omnis vitae,
              corporis quam repellendus iusto illo repudiandae tempore.
            </p>
            <p className="about__txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              accusantium, voluptatum dignissimos aperiam tempore unde
              temporibus laudantium neque! Porro deserunt quidem omnis vitae,
              corporis quam repellendus iusto illo repudiandae tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
