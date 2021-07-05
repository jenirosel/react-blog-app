import "./topbar.css"

export default function TopBar() {
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
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium" alt="profile"/>
        
        <i className="fas fa-search"></i>

      </div>
    </div>
  )
}
