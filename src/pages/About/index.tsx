import MubarackPhoto from "/src/assets/images/test.svg";
import Instagram from "/src/assets/images/instagram.svg";
import Linkedin from "/src/assets/images/linkedin1.svg";
import Github from "/src/assets/images/github.svg";
import Twitter from "/src/assets/images/twitter.svg";
import './index.css'
function About() {
  return (
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
            <button className="emailMe">Email me</button>
          </div>
        </div>
        <div className="right">
          <h2>I'm a Software Engineer Working remotely from Abuja, Nigeria.</h2>
          <p>
            Over the last half-decade, I've been the Einstein behind mobile apps
            that have become the darlings of many screens. Crafting delightful
            user experiences is my jam.
          </p>
          <p>
            If there's one thing I love more than writing code, it's seeing
            users tap, swipe, and smile their way through my creations. Bring on
            the next challenge—I'm ready to keep the good times rolling!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
