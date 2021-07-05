import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <i className="fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          
          <li><Link className="link" to="/">HOME</Link></li>
          <li><Link className="link" to="/about">ABOUT</Link></li>
          <li><Link className="link" to="/contact">CONTACT</Link></li>
          <li><Link className="link" to="/write">WRITE</Link></li>
          <li><Link className="link" to="/logout">{user && "LOGOUT"} </Link></li>
          
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium" alt="profile"/>
          ) : (
            <ul className="topList">
            <li><Link className="link" to="/login">LOGIN</Link></li>
            <li><Link className="link" to="/register">REGISTER</Link></li>
            </ul>
          ) 
        }
        
        <i className="fas fa-search"></i>

      </div>
    </div>
  )
}
