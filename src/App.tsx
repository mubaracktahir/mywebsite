import { useState } from "react";
import MubarackPhoto from '../public/static/images/test.svg'
import Instagram from '../public/static/images/instagram.svg'
import Linkedin from '../public/static/images/linkedin1.svg'
import Github from '../public/static/images/github.svg'
import Twitter from '../public/static/images/twitter.svg'
import "./App.css";



function App() {

  const [selectedNavItem, setSelectedNavItem] = useState('About');

  const handleNavItemSelect = (item:string) => {
    setSelectedNavItem(item);
  };
  return (
    <>
      <nav>
        <ul>
          <li className={selectedNavItem === 'Blog' ? 'selected' : ''} onClick={()=>handleNavItemSelect('Blog')}>
            <a href="#">Blog</a>
          </li>
          <li className={selectedNavItem === 'About' ? 'selected' : ''} onClick={()=>handleNavItemSelect('About')}>
            <a href="#">About</a>
          </li>
          <li className={selectedNavItem === 'Work' ? 'selected' : ''} onClick={()=>handleNavItemSelect('Work')}>
            <a href="#">Work 💪🏽</a>
          </li>
          <li className={selectedNavItem === 'Resume' ? 'selected' : ''} onClick={()=>handleNavItemSelect('Resume')}>
            <a href="https://wwww.read.cv/mubaracktahir" target="_blank">Resume</a>
          </li>
          <li className={selectedNavItem === 'Contact' ? 'selected' : ''} onClick={()=>handleNavItemSelect('Contact')}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/*<div className="noise"></div>*/}
      <div className="container">
        <h1>I'm Múbarack.</h1>
        <div className="content">
          <div className="left">
            <div className="image">
              <img src={MubarackPhoto} alt="Mubarack Tahir" />
            </div>

            <h3>Reach me on</h3>
            <div className="social-icons">
              <a href="https://www.LinkedIn.com/in/mubaracktahir" target="_blank">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/mubaracktahir" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.github.com/mubaracktahir" target="_blank">
                <img src={Github} alt="Github" />
              </a>
              <a href="https://www.x.com/mubaracktahir" target="_blank">
                <img src={Twitter} alt="Twitter" />
              </a>
              <button>Email me</button>
            </div>
          </div>
          <div className="right">
            <h2>
              I’m à Softwàre Engineer Working remotely from Abujà, Nigerià.
            </h2>
            <p>
              Over the last half-decade, I've been the Einstein behind mobile
              apps that have become the darlings of many screens. Crafting
              delightful user experiences is my jam.
            </p>
            <p>
              If there's one thing I love more than writing code, it's seeing
              users tap, swipe, and smile their way through my creations. Bring
              on the next challenge—I'm ready to keep the good times rolling!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
