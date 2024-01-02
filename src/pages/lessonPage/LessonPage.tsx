import { useState } from "react"
import "./lessonPage.scss"
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";
import Loading from "@/utils/lazies/components/Loading";

export default function LessonPage() {
    const navigate = useNavigate();
    const[loading,setLoangding] = useState(false);
    function handleLogOut() {
        navigate("/")
    }
    const [lessonData, setLessonData] = useState(
        {
            id: 1,
            name: "Course 1",
            lessonQuantity: 10,
            des: "Description of Course 1",
            studyTime: "2 hours",
            studyLevel: "Intermediate",
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
                }
            ]
        },)
    return (
        <>
       
       {loading ?  <Loading/> :  <div className="lessonPage_container">
            <div className="lessonPage_header">
                <div className="header_left">
                    <i onClick={() => navigate("/course/1")} className="fa-solid fa-angle-left"></i>
                    <img src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png" alt="" />
                    <h4>{lessonData.name}</h4>
                </div>
                <div className="header_rigth">
                    <span onClick={() => navigate("/")}>Home</span>
                    <Popconfirm
                        placement="rightBottom"
                        title={"Do you want to Log Out?"}
                        description={""}
                        okText="Yes"
                        cancelText="No"
                        onConfirm={handleLogOut}
                    >
                        <button className="btn_logOut">Log Out</button>
                    </Popconfirm>
                </div>
            </div>
            <div className="lessonPage_body">
                <div className="lessonPage_body_left">
                    <iframe width="100%" height="415" src="https://www.youtube.com/embed/9aO28KCCA0U?si=BXmFTDk1TN9NMd1_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>{lessonData.name}</p>
                    <p>{lessonData.des}</p>
                    <p>{lessonData.studyLevel}</p>
                </div>
                <div className="lessonPage_body_right">
                    <p>Nội dung khoá học </p>
                    <div id="accordion">
                        {lessonData.course_chapter.map((lessonItem, index: number) => (<div key={Math.random() * Date.now()} className="card">
                            <div className="card-header" id={`heading${index}`}>
                                <h5 className="mb-0">
                                    <i className="fa-solid fa-pen-fancy"></i>
                                    <button
                                        className="btn-lesson_open"
                                        data-toggle="collapse"
                                        data-target={`#collapse${index}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse${index}`}
                                    >
                                        {lessonItem.title}
                                    </button>
                                    <i className="fa-solid fa-angle-down"></i>
                                </h5>
                            </div>
                            <div
                                id={`collapse${index}`}
                                className="collapse "
                                aria-labelledby={`heading${index}`}
                                data-parent="#accordion"
                            >
                                {lessonItem.lesson.map((chapter) => (<div key={Math.random() * Date.now()} className="card-body">
                                    <i className="fa-solid fa-caret-right"></i> {chapter.title}
                                </div>))}

                            </div>
                        </div>))}

                    </div>
                </div>
            </div>
        </div>}
        </>
        
    )
}