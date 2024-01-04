import { Course } from "@/interface/Interface";
import "./couresPage.scss"
import ModalVideo from "./modalVideoCourse/ModalVideoCourse";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "@/utils/lazies/components/Loading";

const coursesData: Course =  {
        id: 1,
        name: " Nguyen Thanh binh Mieu Mieu",
        lessonQuantity: 10,
        des: "Description of Course 1 lorem hii Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum porro ipsam iusto assumenda nostrum debitis reprehenderit, sequi sed animi eligendi doloribus neque. Sequi eveniet at, aperiam error velit in eaque.",
        studyTime: "2 hours",
        studyLevel: "Intermediate",
        img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg",
        course_chapter: [
            {
                id: 1,
                title: "Chapter 1",
                numericalOrder: 1,
                lesson: [
                    {
                        id: 1,
                        title: "Lesson 1.1",
                        pdfUrl: "/pdf/lesson1.1.pdf",
                        videoUrl: "/videos/lesson1.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 2,
                        title: "Lesson 1.2",
                        pdfUrl: "/pdf/lesson1.2.pdf",
                        videoUrl: "/videos/lesson1.2.mp4",
                        numericalOrder: 2
                    },
                    {
                        id: 3,
                        title: "Lesson 1.2",
                        pdfUrl: "/pdf/lesson1.2.pdf",
                        videoUrl: "/videos/lesson1.2.mp4",
                        numericalOrder: 2
                    }
                ]
            },
            {
                id: 2,
                title: "Chapter 2",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 3,
                        title: "Lesson 2.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 4,
                        title: "Lesson 2.2",
                        pdfUrl: "/pdf/lesson2.2.pdf",
                        videoUrl: "/videos/lesson2.2.mp4",
                        numericalOrder: 2
                    }
                ]
            },
            {
                id: 99,
                title: "Chapter 3",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 101,
                        title: "Lesson 3.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 102,
                        title: "Lesson 3.2",
                        pdfUrl: "/pdf/lesson2.2.pdf",
                        videoUrl: "/videos/lesson2.2.mp4",
                        numericalOrder: 2
                    }
                ]
            }
        ]
    }




export default function CouresPage() {
    const[loading,setLoangding] = useState(false);

const navigate = useNavigate();

    return (
        <> {loading ? <Loading/> : 
      
       <div className="coursePage_container">
       <div className="coursePage_left">
            <h2>{coursesData.name} </h2>
            <p>{coursesData.des}</p>
          
            <span className="caculator_title">Có {coursesData.course_chapter.length} chương và  9 modules và 10 lessons </span>

            <div className="">
                <div id="accordion">
                    {coursesData.course_chapter.map((course, index: number) => (<div key={Math.random() * Date.now()} className="card">
                        <div className="card-header" id={`heading${index}`}>
                            <h5 className="mb-0">
                                <i className="fa-solid fa-pen-fancy"></i>
                                <button
                                    className="btn_open_content"
                                    data-toggle="collapse"
                                    data-target={`#collapse${index}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse${index}`}
                                >
                                    {course.title}
                                </button>
                            </h5>
                        </div>
                        <div
                            id={`collapse${index}`}
                            className="collapse "
                            aria-labelledby={`heading${index}`}
                            data-parent="#accordion"
                        >
                            {course.lesson.map((lesson) => (<div key={Math.random() * Date.now()} className="card-body">
                                <i className="fa-solid fa-caret-right"></i> {lesson.title}
                            </div>))}

                        </div>
                    </div>))}

                </div>

            </div>
        </div>
       {
         <div className="coursePage_right">
         <div className="avatar_course" style={{ backgroundImage: `url(${coursesData.img})` }}>
             <div className="activevideo_container">
             <ModalVideo/>
             <span>Gioi thieu khoa hoc</span>
             </div>
         </div>
         <button className="btn-3" onClick={() => navigate("/lesson/1")}><span>Đăng Ký Ngay </span></button>
         <div className="content_intro">
             <div>
             <i className="fa-solid fa-earth-americas"></i> <span>Trình độ cơ bản </span>
             </div>
             <div>
             <i className="fa-solid fa-pen-fancy"></i> <span>Tổng số {coursesData.course_chapter.length } bài học </span>
             </div>
             <div>
             <i className="fa-regular fa-clock"></i> <span>Thời lượng 03 giờ 26 phút</span>
             </div>
             <div>
             <i className="fa-solid fa-layer-group"></i> <span>Học mọi lúc, mọi nơi </span>
             </div>
           </div>
     </div>
       }
       
       </div>
      
   
}
</>
       
       
    )
}
