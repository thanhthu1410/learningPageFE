import { useNavigate, useParams } from "react-router-dom"
import "./detail.scss"
import BlogCarousel from "../blogCarousel/BlogCarousel";
interface BlogDetailIF{

}

export default function BlogDetail() {
    const {id} = useParams()
    const navigate= useNavigate();
    // id cua blog
    const blogDetail = {
      title: 'ReactJS - Tutorial for Beginners',
      description: `Người ta thống kê có khoảng 1,5 tỷ người đang nói tiếng Anh trên toàn cầu, và khoảng một tỷ người khác đang trong quá trình học nó.`,
      description1: "Đây là lý do khiến tiếng Anh mang lại nhiều lợi ích hơn so với những thứ tiếng ít có cơ hội sử dụng. Khả năng tiếng Anh giúp bạn giao tiếp với nhiều người đến từ nhiều vùng đất khác nhau và sẽ có lợi cho bạn vào một ngày nào đó khi cần xin việc. Khi đi du lịch, bạn sẽ không cần lo lắng khi bị lạc đường ở một đất nước xa lạ, tự tin khi gọi món ăn và có thể trò chuyện với người dân bản xứ về cuộc sống của họ ",
      img: "https://i.pinimg.com/564x/05/88/81/0588816b3a753009ee7f6dd882adf9e9.jpg"
    }
  return (
    <div className="blogdetail_container">
       <div className="blogdetail_container_chirld">
       <div className="blogdetail_top_container">
          <span onClick={() => navigate("/")}>
          <i className="fa-solid fa-backward"></i> HOME
          </span>
        <h3>{blogDetail.title}</h3>
        </div>
     <div className="blogdetail_bottom">
     <img src={blogDetail.img} alt="" />
     <div className="description_container">
     <span><i className="fa-solid fa-heart"></i>{blogDetail.description}</span>
     <span><i className="fa-solid fa-heart"></i>{blogDetail.description1}</span>
     </div>
      
     </div>
     <BlogCarousel/>
       </div>
    </div>
  )
}
