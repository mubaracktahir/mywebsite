import { useState ,useEffect} from "react";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work 💪🏽</a>
          </li>
          <li>
            <a href="https://wwww.read.cv/mubaracktahir">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="noise"></div>
      <div className="container">
        <h1>I'm Mubarack.</h1>
        <div className="content">
          <div className="left">
            <div className="image">
              <img src="./src/assets/test.svg" alt="Your Image" />
            </div>

            <h3>Ream me on</h3>
            <div className="social-icons">
              <a href="https://www.LinkedIn.com/in/mubaracktahir">
                <img src="./src/assets/linkedin1.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/mubaracktahir">
                <img src="./src/assets/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.github.com/mubaracktahir">
                <img src="./src/assets/github.svg" alt="Github" />
              </a>
              <a href="https://www.x.com/mubaracktahir">
                <img src="./src/assets/twitter.svg" alt="Twitter" />
              </a>
              <button>Email me</button>
            </div>
          </div>
          <div className="right">
            <h2>I’m à Softwàre Engineer Working remotely fromAbujà, Nigerià.</h2>
            <h4>
              Over the last half-decade, I've been the Einstein behind mobile
              apps that have become the darlings of many screens. Crafting
              delightful user experiences is my jam.
              <br />
              <br /> If there's one thing I love more than writing code, it's
              seeing users tap, swipe, and smile their way through my creations.
              Bring on the next challenge—I'm ready to keep the good times
              rolling!
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
