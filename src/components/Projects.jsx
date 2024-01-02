import React from "react";
import classes from "../components/styles/Projects.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import img1 from "../assets/todo.png";
import img2 from "../assets/movie.png";
import img3 from "../assets/calculator.png";
import img4 from "../assets/tic-tac-toe.png";
import img5 from "../assets/tea.png"

const PROJECT_API = [
  {
    name: "Calculator app",
    githubLink: "https://github.com/Dtsertsvadze/calculator",
    img: img3,
    live: "https://dtsertsvadze.github.io/calculator/",
  },
  {
    name: "Movie app",
    githubLink: "https://github.com/Dtsertsvadze/movie-app",
    img: img2,
    live: "https://dtsertsvadze.github.io/movie-app/",
  },
  {
    name: "Todo app",
    githubLink: "https://github.com/Dtsertsvadze/todo-app",
    img: img1,
    live: "https://dtsertsvadze.github.io/todo-app/",
  },
  {
    name: "Tic Tac Toe",
    githubLink: "https://github.com/Dtsertsvadze/tic-tac-toe",
    img: img4,
    live: "https://dtsertsvadze.github.io/tic-tac-toe/",
  },
  {
    name: "Tea Shop",
    githubLink: "https://github.com/Dtsertsvadze/tea-shop",
    img: img5,
    live: "https://dtsertsvadze.github.io/tea-shop/",
  }
];

const projects = PROJECT_API.map((i) => (
  <div key={i.name} className={classes.project}>
    <div className={classes["project-img-wrapper"]}>
      <img className={classes["project-img"]} src={i.img} alt={i.name} />
    </div>
    <div className={classes["project-link"]}>
      <a className={classes.link} href={i.githubLink}>
        <div className={classes["project-name"]}>{i.name}</div>
        <AiOutlineGithub className={classes["github-icon"]} />
      </a>
    </div>
    <div className={classes["live-server-wrapper"]}>
      <a className={classes["live-server"]} href={i.live}>
        Live server
      </a>
      <div className={classes["project-line1"]}></div>
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
