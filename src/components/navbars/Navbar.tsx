import { useNavigate } from "react-router-dom"
import "./navbar.scss"
export default function Navbar() {
  const navigate = useNavigate()
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
    </div>
  )
}
