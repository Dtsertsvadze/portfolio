import React from "react";
import classes from "./styles/About.module.css";

const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about"]}>
        <div className={classes["about-text"]}>About.</div>
        <div className={classes["about-line"]}></div>
      </div>
      <div className={classes["about-wrapper"]}>
        <div className={classes["img-wrapper"]}>My profile Picture</div>
        <div className={classes["about-description"]}>
          I am Data Tsertsvadze, beginner react developer. I have started
          self-educational journey in 2023 and every day with hard-work I am
          moving forward to my goals to become React Developer and land my first
          job in Tech industry.
          <br></br>I am looking forward to find a company which will give me an
          opportunity to become the member of their environment and strengthen
          my skills there, because it is crucial for my development to reach my
          goals and become professional React developer<br></br>
          With my dedication, I am certain that nothing is impossible to
          achieve.
        </div>
      </div>
    </div>
  );
};

export default About;
