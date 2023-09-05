import React from "react";
import classes from "./styles/Home.module.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className={classes["home-container"]}>
      <div className={classes["wrapper"]}>
        <h1>Hello, I am</h1>
        <h2>
          <span className={classes.name}>Data Tsertsvadze</span>
        </h2>
        <h3>Begginer Front-end Developer</h3>
      </div>
      <div className={classes.socials}>
        <div className={classes.myLinks}>
          <div>My Links</div> <AiOutlineArrowRight />
        </div>
        <a
          className={classes.links}
          href="https://www.instagram.com/datacercvadze/"
        >
          <AiOutlineInstagram />
        </a>

        <a
          className={classes.links}
          href="https://www.linkedin.com/in/davit-tsertsvadze-781914226/"
        >
          <AiOutlineLinkedin />
        </a>
        <a className={classes.links} href="https://github.com/Dtsertsvadze">
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
