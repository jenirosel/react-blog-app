import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './sidebar.css';

export default function SideBar() {
  const [cats,setCat] = useState([]);

  useEffect(() => {
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCat(res.data)
    }
    getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img className="sidebarImg" src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis elementum nulla. Pellentesque lorem velit, accumsan cursus libero eget, commodo egestas ipsum. 
        </p>
        
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          { cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li key={c.name} className="sidebarListItem">{c.name}</li>
              </Link>
            ))
          }
          
         
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
