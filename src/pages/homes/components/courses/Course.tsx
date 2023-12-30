import { useState } from "react"
import "./course.scss"
import ItemCourse from "./itemCourses/ItemCourse"


export default function CourseComponent() {
  const [listCourse, setCourses] = useState([
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
          },{
            id: 999,
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
          id: 888,
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
          },
          {
            id: 777,
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
  ]
  )
  return (
    <div style={{maxWidth:"1330px"}}>{listCourse.map((item: any) => (
        <ItemCourse key={Math.random() * Date.now()} course={item}/>
    ))}</div>
  )
}
