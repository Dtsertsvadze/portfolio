import React from "react";
import classes from "../components/styles/Skills.module.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
  return (
    <div className={classes["skills-container"]}>
      <div className={classes["skills-wrapper"]}>
        <div className={classes["skills-line"]}></div>
        <div className={classes["skills-text"]}>Skills.</div>
      </div>
      <div className={classes["skills-icons"]}>
        <div className={classes["skills-icon"]}>
          <FaReact className={classes.icon} />
          <div>React</div>
        </div>
        <div className={classes["skills-icon"]}>
          <AiOutlineHtml5 className={classes.icon} />
          <div>Html</div>
        </div>
        <div className={classes["skills-icon"]}>
          <SiCss3 className={classes.icon} />
          <div>CSS</div>
        </div>
        <div className={classes["skills-icon"]}>
          <DiJavascript1 className={classes.icon} />
          <div>JavaScript</div>
        </div>
        <div className={classes["skills-icon"]}>
          <BsGit className={classes.icon} />
          <div>Git</div>
        </div>
        <div className={classes["skills-icon"]}>
          <AiFillGithub className={classes.icon} />
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
