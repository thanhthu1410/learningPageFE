import { useNavigate } from "react-router-dom"
import "./blog.scss"

export default function Blog() {
    const navigate = useNavigate()
    const listBlog = [
        {
            title: "KHOÁ HỌC PHÙ HỢP VỚI NHỮNG AI?",
            content: [
                "Dành cho ai muốn cải thiện Tiếng Anh toàn diện 4 kỹ năng.",
                " Ai đang loay hoay tìm lộ trình phù hợp với bản thân.",
                "Muốn trau dồi khả năng giao tiếp Tiếng Anh.",
                "Muốn luyện thi TOEIC, Ielts bài bản, bám sát mục tiêu.",
                "Người bận rộn, cần một lộ trình học tinh gọn, hiệu quả.",
            ],
            img : "https://i.pinimg.com/564x/e8/d6/eb/e8d6eb71133a7ee40b469c6d4776a469.jpg"
        },
        {
            title: "ƯU ĐIỂM KHI HỌC Ở ENGLISH RIGHT NOW?",
            content: [
                "Lộ trình học tiết kiệm thời gian, tối ưu kết quả.",
                " Gấp đôi thời lượng học nhưng chi phí không đổi.",
                "  Giáo viên giàu kinh nghiệm giảng dạy, chuyên môn cao.",
                "Tối ưu tính thực hành ngay trên lớp học.",
                "Kiểm tra, đánh giá kết quả học tập định kỳ, thường xuyên.",
                "Tặng tài khoản học online trọn đời miễn phí.."
            ],
            img: "https://i.pinimg.com/564x/5a/f1/bd/5af1bd8b45af0c7f564fc1a792529006.jpg"

        },
        {
            title: "TRUNG TÂM CÓ ĐẢM BẢO ĐẦU RA KHÔNG?",
            content: [
                "Dành cho ai muốn cải thiện Tiếng Anh toàn diện 4 kỹ năng.",
                " Ai đang loay hoay tìm lộ trình phù hợp với bản thân.",
                "Muốn trau dồi khả năng giao tiếp Tiếng Anh.",
                "Muốn luyện thi TOEIC, Ielts bài bản, bám sát mục tiêu.",
                "Người bận rộn, cần một lộ trình học tinh gọn, hiệu quả.",
            ],
            img: "https://i.pinimg.com/564x/53/74/c6/5374c6476bdc9f0be56b3a16633618e7.jpg"
        }
    ]
    return (
        <div className="blog_container">
                <h3>Blog</h3>
                <div className="blog_container_chirld">
                    {listBlog.map((item) => (
                        <div className="blog_item">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                        <div className="middle">
                            <div className="text" onClick={() => navigate("/blog/1")}>Xem Blog</div>
                        </div>
                   </div>
                    )  )}
                </div>
        </div>
    )
}
