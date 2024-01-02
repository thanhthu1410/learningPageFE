export interface Category{
    id: number;
    nameCategory: string;
    listCourse: Course[]
    
}
// Định nghĩa giao diện course 
export interface Course {
    id: number;
    name: string;
    lessonQuantity: number;
    des: string;
    studyTime: string;
    studyLevel: string
    course_chapter: Course_chapter[]
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