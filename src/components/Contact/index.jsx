import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

function Envelope() {
  // https://codepen.io/jakegilesphillips/pen/MveNLe
  return (
    <div class="letter-image">
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-title"></div>
          <div class="letter-context"></div>
          <div class="letter-stamp">
            <div class="letter-stamp-inner"></div>
          </div>
        </div>
        <div class="top-fold"></div>
        <div class="body"></div>
        <div class="left-fold"></div>
      </div>
      <div class="shadow"></div>
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
        <div className="contact-form"></div>
      </article>
    </>
  );
}