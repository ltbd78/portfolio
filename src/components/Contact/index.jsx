import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

function Envelope() {
  // https://codepen.io/jakegilesphillips/pen/MveNLe
  return (
    <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default function Contact() {
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 2000);
  setTimeout(() => setHoverClass("hover-animation"), 2000);
  return (
    <>
      <article className="contact-page">
        <div className="heading">
          <h1>
            <AnimatedLetters strArray={"Contact Me".split("")} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
          </h1>
          <Envelope />
        </div>
        <p>Please do not hesitate to use the form below to get in touch with me if you have any inquires or requests.</p>
        <form>
          <input className="name" type="text" placeholder="Name" name="name" required />
          <input className="email" type="email" placeholder="Email" name="email" required />
          <input className="subject" type="text" placeholder="Subject" name="subject" />
          <textarea className="message" placeholder="Message" name="message" required />
          <input className="submit" type="submit" value="SEND" />
        </form>
      </article>
    </>
  );
}
