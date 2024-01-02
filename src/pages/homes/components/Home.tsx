
import Sidebar from "@/components/sidebars/Sidebar";
import "./home.scss"
import CarouselComponent from "@/components/carousels/Carousel";
import Course from "../components/courses/Course";
import Blog from "./blogs/Blog";
import FeatureVideo from "./featureVideo/FeatureVideo";
import { Category } from "@/interface/Interface";
export default function Home() {
  const categoryCourseData: Category[] = [
    {
      id: 1,
      nameCategory: "category 1",
      listCourse: [
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
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
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
          id: 1,
          name: "Course 2",
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
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
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
          id: 1,
          name: "Course 3",
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
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
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
          id: 1,
          name: "Course 4",
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
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
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

    },
    {
      id: 889,
      nameCategory: "category 2",
      listCourse: [
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
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
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
          id: 1,
          name: "Course 5",
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
                  title: "Chapter 2",
                  numericalOrder: 2,
                  lesson: [
                      {
                          id: 100,
                          title: "Lesson 2.1",
                          pdfUrl: "/pdf/lesson2.1.pdf",
                          videoUrl: "/videos/lesson2.1.mp4",
                          numericalOrder: 1
                      },
                      {
                          id: 101,
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
        id: 1,
        name: "Course 6",
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
                title: "Chapter 2",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 100,
                        title: "Lesson 2.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 101,
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

    }
  ]


  return (
    <div className="home_container">
      <div className="home-container_right">
        <CarouselComponent />
        <Course categoryCourseData={categoryCourseData} />
        <Blog />
        <FeatureVideo />
      </div>
    </div>
  )
}
