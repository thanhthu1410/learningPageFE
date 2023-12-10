import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className="sidebar_container">
        <div className="side_item">
        <i className="fa-solid fa-house"></i>
       <span> Home</span>
        </div>
        <div  className="side_item">
        <i className="fa-solid fa-book-open"></i>
       <span>
       Course
       </span>
        </div >
        <div  className="side_item">
        <i className="fa-brands fa-blogger"></i>
            <span>Contact</span>
        </div>
    </div>
  )
}
