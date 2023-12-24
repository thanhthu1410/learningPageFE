import { useNavigate } from "react-router-dom"
import "./navbar.scss"
import { useState } from "react";
import ModalSearch from "../modalSearchMobiles/ModalSearch";
export default function Navbar() {
  const navigate = useNavigate();
  const [showNavbar,setShowNavbar] = useState(false);
  const [showSearch,setShowSearch] = useState(false);
function handleShowSearch (searchKey: string) {
    console.log("searchKey" , searchKey);
    if(searchKey.length > 0 ) { 
      setShowSearch(true);
    }else if (searchKey == "" ){
      setShowSearch(false)
    }
}
  return (
    <div className="navbar_container">
      <div className="navbar_container_chrild">
        <div className="logo">
          <img src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png" alt="" />
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Tim kiem khoa hoc.... " onChange={(e) => handleShowSearch(e.target.value)}/>
          {showSearch ? 
          <div className="search_content_container">
            <p className="result-search-title">Không có kết quả tương ứng </p>
            <p className="result-search-title">Kết quả tìm kiếm tương ứng </p>
            <div className="result-search-content">
                <div className="result-search-item"> 
                  <img src="https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg" alt="" />
                  <span>Khoá Học Tiếng Anh cơ bản</span>
                </div>
                <div className="result-search-item"> 
                  <img src="https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg" alt="" />
                  <span>Khoá Học Tiếng Anh cơ bản</span>
                </div>
            </div>
          </div> : <></>}
        </div>

        <div className="login_logo">
          <button className="btn-3" onClick={() => navigate("/login")}><span>Login</span></button>
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
        <p onClick={() => {navigate("/login"); setShowNavbar(!showNavbar)}}>Login</p>
        <ModalSearch/>
      </div>: <></>}
     
    </div>
  )
}
