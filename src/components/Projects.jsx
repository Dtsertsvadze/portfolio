import React from "react";
import classes from "../components/styles/Projects.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import img1 from "../assets/todo.png";
import img2 from "../assets/movies.png";
import img3 from "../assets/calculator.png";
import img4 from "../assets/tic-tac-toe.png";

const PROJECT_API = [
  {
    name: "Calculator app",
    githubLink: "https://github.com/Dtsertsvadze/calculator",
    img: img3,
  },
  {
    name: "Movie app",
    githubLink: "https://github.com/Dtsertsvadze/calculator",
    img: img2,
  },
  {
    name: "Todo app",
    githubLink: "https://github.com/Dtsertsvadze/calculator",
    img: img1,
  },
  {
    name: "Tic Tac Toe",
    githubLink: "https://github.com/Dtsertsvadze/calculator",
    img: img4,
  },
];

const projects = PROJECT_API.map((i) => (
  <div key={i.name} className={classes.project}>
    <div className={classes["project-img-wrapper"]}>
      <img className={classes["project-img"]} src={i.img} alt={i.name} />
    </div>
    <div className={classes["project-link"]}>
      <div className={classes["project-name"]}>{i.name}</div>
      <div className={classes["project-line"]}></div>
      <div>
        <a href={i.githubLink}>
          <AiOutlineGithub className={classes["github-icon"]} />
        </a>
      </div>
    </div>
  </div>
));

const Projects = () => {
  return (
    <div className={classes["projects-container"]}>
      <div className={classes["projects-header"]}>
        <div className={classes["header-line"]}></div>
        <div className={classes["header-text"]}>My Projects.</div>
        <div className={classes["header-line"]}></div>
      </div>
      <div className={classes["projects-wrapper"]}>{projects}</div>
    </div>
  );
};

export default Projects;
