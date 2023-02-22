import "./index.scss";
import LogoLPNG from "../../../assets/images/logo-l.png";
import LogoLSVG from "../../../assets/images/logo-l.svg";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import gsap from "gsap-trial";

export default function Logo() {
  const outlineLogoRef = useRef();
  return (
    <div className="logo-container">
      {/* <img className='solid-logo' src={LogoLPNG}/> */}
      <img src={LogoLSVG} />
    </div>
  );
}
