// Định nghĩa giao diện Category of course
export interface Category{
    id: number;
    nameCategory: string;
    listCourse: Course[]
    
}

export interface Course {
    id: number;
    name: string;
    lessonQuantity: number;
    des: string;
    studyTime: string;
    studyLevel: string;
    img: string;
    course_chapter: Course_chapter[];
    price: string

}

// Định nghĩa giao diện course chapter
export interface Course_chapter {
    id: number;
    title: string;
    numericalOrder: number;
    lesson: Course_lesson[];
}

// Định nghĩa giao diện Course
export interface Course_lesson {
    id: number;
    title: string;
    pdfUrl: string;
    videoUrl: string;
    numericalOrder: number;
   

}