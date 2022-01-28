import "../NavBar.css";
import logo from "../images/ironlogo.png";
import menu from "../images/menu.png";

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <img src={menu} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
