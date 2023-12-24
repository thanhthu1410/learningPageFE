export interface Course {
    id: number;
    name: string;
    lessonQuantity: number;
    des: string;
    studyTime: string;
    studyLevel: string
    course_chapter: Course_chapter[]
}

// Định nghĩa giao diện Module
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