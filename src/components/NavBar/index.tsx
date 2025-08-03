import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
function NavBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navScroll" : undefined}>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="https://mubaracktahir.hashnode.dev/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work 💪🏽</NavLink>
        </li>
        <li>
          <NavLink to="https://wwww.read.cv/mubaracktahir" target="_blank">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
