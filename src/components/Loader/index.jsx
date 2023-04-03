import "./index.css";

export default function HamsterLoader(key) {
  // https://uiverse.io/Nawsome/wet-mayfly-23
  const className = "wheel-and-hamster" + " " + key;
  return (
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={className}>
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
  );
}
