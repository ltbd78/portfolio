import "./envelope.scss";
import "./index.scss";
import { useState, useRef } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";

function Envelope() {
  // https://codepen.io/jakegilesphillips/pen/MveNLe
  return (
    <div className="letter-container">
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
  const form = useRef();

  setTimeout(() => setInitialClass(""), 2000);
  setTimeout(() => setHoverClass("hover-animation"), 2000);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_ltbd78", "template_ltbd78", form.current, "pJLqjN1xlGvSHyp9_")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

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
        <form ref={form} onSubmit={sendEmail}>
          {/* name="foo" will be referenced as {{foo}} in the emailjs template */}
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
