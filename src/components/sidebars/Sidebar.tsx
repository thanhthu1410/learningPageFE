import { useNavigate } from "react-router-dom"
import "./sidebar.scss"

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="sidebar_container">
        <div onClick={() => navigate("/")} className="side_item">
        <i className="fa-solid fa-house"></i>
       <span > Home</span>
        </div>
        <div  onClick={() => navigate("/course/1")}  className="side_item">
        <i className="fa-solid fa-book-open"></i>
       <span >
       Course
       </span>
        </div >
        <div  className="side_item">
        <i className="fa-brands fa-blogger"></i>
            <span  onClick={() => navigate("/")}>Contact</span>
        </div>
    </div>
  )
}
