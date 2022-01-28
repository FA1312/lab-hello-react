import "../Cards.css";
import setting from "../images/setting.png";
import code from "../images/code.png";
import tool from "../images/tool.png";
import cpu from "../images/cpu.png";

function Cards() {
  return (
    <div className="card-container">
      <div>
        <img src={tool} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>

      <div>
        <img src={cpu} alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>

      <div>
        <img src={setting} alt="" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
      </div>

      <div>
        <img src={code} alt="" />
        <h3>JSX</h3>
        <p>Statically-typed designed to run on modern browsers</p>
      </div>
    </div>
  );
}

export default Cards;
