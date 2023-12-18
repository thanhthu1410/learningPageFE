import "./couresPage.scss"

// Định nghĩa giao diện Lesson
interface Lesson {
    id: number;
    title: string;
}

// Định nghĩa giao diện Module
interface Module {
    id: number;
    title: string;
    lessons: Lesson[];
}

// Định nghĩa giao diện Course
interface Course {
    id: number;
    title: string;
    description: string;
    modules: Module[];
}

// Tạo dữ liệu mẫu
const coursesData: Course[] = [
    {
        id: 1,
        title: "Web Development",
        description: "A comprehensive course on web development.",
        modules: [
            {
                id: 101,
                title: "HTML Basics",
                lessons: [
                    { id: 1001, title: "Introduction to HTML" },
                    { id: 1002, title: "HTML Elements" }
                ]
            },
            {
                id: 102,
                title: "CSS Fundamentals",
                lessons: [
                    { id: 1003, title: "Introduction to CSS" },
                    { id: 1004, title: "CSS Selectors" }
                ]
            }
        ]
    },
    // Add more courses with modules and lessons as needed
];
console.log("courses", coursesData) 
export default function CouresPage() {
  return (
    <div className="coursePage_container">
        <div className="coursePage_left">
            abc 
        </div>
        <div className="coursePage_right">
            def
        </div>
      
    </div>
  )
}
