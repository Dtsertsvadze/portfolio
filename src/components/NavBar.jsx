import React, { useContext, useEffect, useState } from "react";
import classes from "./styles/NavBar.module.css";
import { BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { HiOutlineCube } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { PiContactlessPayment } from "react-icons/pi";
import { MyContext } from "../store/context";
import { scrollTo } from "./ScrollTo";

const NavBar = () => {
  const ctx = useContext(MyContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [highLight, setHighLight] = useState({
    homeLight: false,
    aboutLight: false,
    skillsLight: false,
    projectsLight: false,
    contactLight: false,
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeIndex = 0;
  const aboutIndex = ctx.offsetHeights[0];
  const skillsIndex = ctx.offsetHeights[0] + ctx.offsetHeights[1];
  const projectsIndex =
    ctx.offsetHeights[0] + ctx.offsetHeights[1] + ctx.offsetHeights[2];
  const contactIndex =
    ctx.offsetHeights[0] +
    ctx.offsetHeights[1] +
    ctx.offsetHeights[2] +
    ctx.offsetHeights[3];

  useEffect(() => {
    const highlightIcons = () => {
      setHighLight({
        homeLight: scrollPosition < aboutIndex,
        aboutLight:
          scrollPosition >= aboutIndex && scrollPosition < skillsIndex,
        skillsLight:
          scrollPosition >= skillsIndex && scrollPosition < projectsIndex,
        projectsLight:
          scrollPosition >= projectsIndex && scrollPosition < contactIndex,
        contactLight: scrollPosition >= contactIndex,
      });
    };

    highlightIcons();
  }, [scrollPosition, aboutIndex, skillsIndex, projectsIndex, contactIndex]);

  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-wrapper"]}>
        <div>
          <BiHomeAlt
            onClick={() => scrollTo(homeIndex)}
            className={`${classes.icon} ${
              highLight.homeLight ? classes.highlight : ""
            }`}
          />
        </div>
        <div>
          <GoPerson
            onClick={() => scrollTo(aboutIndex)}
            className={`${classes.icon} ${
              highLight.aboutLight ? classes.highlight : ""
            }`}
          />
        </div>
        <div>
          <HiOutlineCube
            onClick={() => scrollTo(skillsIndex)}
            className={`${classes.icon} ${
              highLight.skillsLight ? classes.highlight : ""
            }`}
          />
        </div>
        <div>
          <FaReact
            onClick={() => scrollTo(projectsIndex)}
            className={`${classes.icon} ${
              highLight.projectsLight ? classes.highlight : ""
            }`}
          />
        </div>
        <div>
          <PiContactlessPayment
            onClick={() => scrollTo(contactIndex)}
            className={`${classes.icon} ${
              highLight.contactLight ? classes.highlight : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
