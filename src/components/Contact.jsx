import React from "react";
import classes from "../components/styles/Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
const confirmHandler = e =>{
  e.preventDefault();
}

  return (
    <div className={classes.contact}>
      <div className={classes["contact-header"]}>
        Contact<span className={classes.dot}>.</span>
      </div>
      <div className={classes["contact-text"]}>
        Shoot me an email if you want to connect! You can also find me on{" "}
        <a
          href="https://www.linkedin.com/in/davit-tsertsvadze-781914226/"
          className={classes["contact-links"]}
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a
          href="https://www.facebook.com/tsertsvadzedata/"
          className={classes["contact-links"]}
        >
          Facebook
        </a>{" "}
        if that's more your speed.
      </div>
      <div className={classes.email}>
        <AiOutlineMail /> <div>Tsertsvadzedata97@gmail.com</div>
      </div>
      <form onSubmit={confirmHandler} className={classes.form}>
        <input placeholder="Enter name..." className={classes["contact-name"]} />
        <input placeholder="email..." className={classes["contact-email"]} />
        <textarea placeholder="text..." className={classes["contact-email-text"]} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
