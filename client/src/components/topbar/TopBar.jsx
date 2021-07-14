import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});

  }

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
          <li><Link className="link" to="/logout" onClick={handleLogout}>{user && "LOGOUT"} </Link></li>
          
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img className="topImg"
              src={user.profilePic}
              alt="profile"
            />
            </Link>
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
