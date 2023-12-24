import { Course } from "@/interface/Interface";
import "./couresPage.scss"
import ModalVideo from "./modalVideoCourse/ModalVideoCourse";
import { useNavigate } from "react-router-dom";

const coursesData: Course[] = [
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
    },
    {
        id: 2,
        name: "Course 2",
        lessonQuantity: 8,
        des: "Description of Course 2",
        studyTime: "1.5 hours",
        studyLevel: "Beginner",
        course_chapter: [
            {
                id: 3,
                title: "Chapter 1",
                numericalOrder: 1,
                lesson: [
                    {
                        id: 5,
                        title: "Lesson 1.1",
                        pdfUrl: "/pdf/lesson1.1.pdf",
                        videoUrl: "/videos/lesson1.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 6,
                        title: "Lesson 1.2",
                        pdfUrl: "/pdf/lesson1.2.pdf",
                        videoUrl: "/videos/lesson1.2.mp4",
                        numericalOrder: 2
                    }
                ]
            },
            {
                id: 4,
                title: "Chapter 2",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 7,
                        title: "Lesson 2.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 8,
                        title: "Lesson 2.2",
                        pdfUrl: "/pdf/lesson2.2.pdf",
                        videoUrl: "/videos/lesson2.2.mp4",
                        numericalOrder: 2
                    }
                ]
            }
        ]
    }
]



export default function CouresPage() {

const totalLessons = coursesData.reduce((acc, course) => {
    return acc + course.course_chapter.reduce((moduleAcc, module) => {
        return moduleAcc + module.lesson.length;
    }, 0);
}, 0);
const totalModules = coursesData.reduce((acc, course) => {
    return acc + course.course_chapter.length;
}, 0);
const navigate = useNavigate();

    return (
        <div className="coursePage_container">
            <div className="coursePage_left">
                <h2>Tran Thi Thanh Thu </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque amet ducimus, beatae ad repudiandae! Saepe illo nihil harum fugit ex necessitatibus eum, voluptatem commodi neque, optio in cumque magni.</p>
                <p className="coursePage_title">Nội dung khoá học  </p>
                <span className="caculator_title">Có {coursesData.length} chương và  {totalModules} modules và {totalLessons} lessons </span>

                <div className="">
                    <div id="accordion">
                        {coursesData.map((course, index: number) => (<div key={Math.random() * Date.now()} className="card">
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
                                        {course.name}
                                    </button>
                                </h5>
                            </div>
                            <div
                                id={`collapse${index}`}
                                className="collapse "
                                aria-labelledby={`heading${index}`}
                                data-parent="#accordion"
                            >
                                {course.course_chapter.map((chapter) => (<div key={Math.random() * Date.now()} className="card-body">
                                    <i className="fa-solid fa-caret-right"></i> {chapter.title}
                                </div>))}

                            </div>
                        </div>))}

                    </div>

                </div>
            </div>
            <div className="coursePage_right">
                <div className="avatar_course" style={{ backgroundImage: `url(https://truonghoc247.vn/wp-content/uploads/2023/09/ung-dung-hoc-tieng-anh-0.jpg)` }}>
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
                    <i className="fa-solid fa-pen-fancy"></i> <span>Tổng số 12 bài học </span>
                    </div>
                    <div>
                    <i className="fa-regular fa-clock"></i> <span>Thời lượng 03 giờ 26 phút</span>
                    </div>
                    <div>
                    <i className="fa-solid fa-layer-group"></i> <span>Học mọi lúc, mọi nơi </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
