import { NavLink } from 'react-router-dom'
import './index.css'
function NavBar() {
  return (
    <nav> 
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul>
          <li>
            <NavLink to="/blog">Blog</NavLink>
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
  )
}

export default NavBar