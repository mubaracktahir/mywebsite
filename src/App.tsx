import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Blog from "./pages/Blog";

function App() {
  type buttonState = "About" | "Blog" | "Resume" | "Work" | "Contact";
  const [selectedNavItem, setSelectedNavItem] = useState<buttonState>("About");

  const handleNavItemSelect = (item: buttonState) => {
    setSelectedNavItem(item);
  };
  return (
    
      <div>
        <nav>
          <ul>
            <li
              className={selectedNavItem === "Blog" ? "selected" : ""}
              onClick={() => handleNavItemSelect("Blog")}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={selectedNavItem === "About" ? "selected" : ""}
              onClick={() => handleNavItemSelect("About")}
            >
              <Link to="/">About</Link>
            </li>
            <li
              className={selectedNavItem === "Work" ? "selected" : ""}
              onClick={() => handleNavItemSelect("Work")}
            >
              <Link to="/work">Work 💪🏽</Link>
            </li>
            <li
              className={selectedNavItem === "Resume" ? "selected" : ""}
              onClick={() => handleNavItemSelect("Resume")}
            >
              <Link to="https://wwww.read.cv/mubaracktahir" target="_blank">
                Resume
              </Link>
            </li>
            <li
              className={selectedNavItem === "Contact" ? "selected" : ""}
              onClick={() => handleNavItemSelect("Contact")}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>

  );
}
export default App;
