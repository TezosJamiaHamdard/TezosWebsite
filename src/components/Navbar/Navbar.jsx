import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { useEffect } from 'react'
import {Link} from "react-router-dom"


export default function Navbar() {
  useEffect(()=>{
const nav = document.querySelector("#nav");

// Create a function to change the styles of the navigation bar
function updateNav() {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 10) {  // This is similar to the start condition in GSAP
    nav.style.backgroundColor = "#000";
    nav.style.height = "80px";
    nav.style.transition = "background-color 0.5s, height 0.5s"; // Duration of the change
  } else {
    nav.style.backgroundColor = ""; // Reset to original style
    nav.style.height = ""; // Reset to original style
  }
}

// Add a scroll event listener to the window
window.addEventListener("scroll", updateNav);
  })
  

  return (
    <div>
      <nav id="nav">
        <img src={logo} alt="" className='logo' />
        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
            <li className="nav_list">
              <Link to="/" className="nav-link active-link">
                Home
              </Link>
            </li>
            <li className="nav_list">
              <Link to="/" className="nav-link">
                Members
              </Link>
            </li>
            <li className="nav_list">
              <Link to="/" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav_list">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link >
            </li>
            <li className="nav_list">
              <Link to="/about" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button className="join"> JoinUs </button>
          <button className="about"> About</button>
        </div>
      </nav>
    </div>
  )
}


