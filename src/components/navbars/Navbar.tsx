import { useNavigate } from "react-router-dom"
import "./navbar.scss"
import { useState } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const [showNavbar,setShowNavbar] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar_container_chrild">
        <div className="logo">
          <img src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png" alt="" />
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Tim kiem khoa hoc.... " />
        </div>

        <div className="login_logo">
          <button className="btn-5" onClick={() => navigate("/login")}><span>Login</span></button>
        </div>
      </div>
      <div className="navbar_mobile_chirld"></div>
      <div className="navbar_mobile">
        <div className="logo_mobile">
          <img src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png" alt="" />
        </div>
        <div className="icon_bar">
          <i onClick={() => setShowNavbar(!showNavbar)} className="fa-solid fa-bars"></i>
        </div>
      </div>
      {showNavbar ? <div className="navbar_mobile_content">
        <p onClick={() => {navigate("/"); setShowNavbar(!showNavbar)}}>Home</p>
        <p>Course</p>
        <p onClick={() => {navigate("/blog/1"); setShowNavbar(!showNavbar)}}>Blog</p>
        <p onClick={() => {navigate("/login"); setShowNavbar(!showNavbar)}}>Login</p>
      </div>: <></>}
     
    </div>
  )
}
