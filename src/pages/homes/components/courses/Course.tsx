import { useState } from "react"
import "./course.scss"
import ItemCourse from "./itemCourses/ItemCourse"

export default function Course() {
  const [courses, setCourses] = useState(

    [

      {
        "id": 2,
        "nameCategory": "Khoa Hoc 2 ",
        "listCourse": [
          {
            "id": 8,
            "nameCourse": "Tiếng anh nghe nói",
            "img": "https://i.pinimg.com/564x/21/8e/2d/218e2dfb726c0e461a77783b1ce14b80.jpg",
            "price": 100000,
          },
          {
            "id": 10,
            "nameCourse": "Tiếng anh dọc hiểu ",
            "img": "https://i.pinimg.com/564x/2d/ea/03/2dea03e70e1add93759f35595cb4a410.jpg",
            "price": 999999,
          },
          {
            "id": 9,
            "nameCourse": "Tiếng anh Ngữ pháp",
            "img": "https://i.pinimg.com/564x/6d/82/b4/6d82b4843fef1278bf4868cbb6c9a255.jpg",
            "price": 399.000,
          },
          ,
          {
            "id": 19,
            "nameCourse": "Tiếng anh Basic",
            "img": "https://i.pinimg.com/564x/e8/62/0d/e8620d5364138fe60785cadcc95d7270.jpg",
            "price": 499.000,
          }
        ]
      },
      {
        "id": 3,
        "nameCategory": "Khoa Hoc 3",
        "listCourse": [
          {
            "id": 11,
            "nameCourse": "Toeic 1",
            "img": "https://i.pinimg.com/564x/2d/ea/03/2dea03e70e1add93759f35595cb4a410.jpg",
            "price": 499.000,
          },
          {
            "id": 12,
            "nameCourse": "Toeic 2",
            "img": "https://i.pinimg.com/564x/37/50/5f/37505f515a1f209f715f83b97f7e5443.jpg",
            "price": 399.000,
          },
          {
            "id": 14,
            "nameCourse": "Toeic 2",
            "img": "https://i.pinimg.com/564x/0d/fa/94/0dfa94b24f5252d8848dc3c57b2d2672.jpg",
            "price": 499.000,
          },
          {
            "id": 13,
            "nameCourse": "Toeic 1",
            "img": "https://i.pinimg.com/564x/2d/ea/03/2dea03e70e1add93759f35595cb4a410.jpg",
            "price": 499.000,
          },
          {
            "id": 12,
            "nameCourse": "Toeic 4",
            "img": "https://i.pinimg.com/564x/37/50/5f/37505f515a1f209f715f83b97f7e5443.jpg",
            "price": 499.000,
          },
          {
            "id": 14,
            "nameCourse": "Toeic 6",
            "img": "https://i.pinimg.com/564x/0d/fa/94/0dfa94b24f5252d8848dc3c57b2d2672.jpg",
            "price": 499.000,
          },
          {
            "id": 12,
            "nameCourse": "Toeic 7",
            "img": "https://i.pinimg.com/564x/37/50/5f/37505f515a1f209f715f83b97f7e5443.jpg",
            "price": 499.000,
          },
          {
            "id": 14,
            "nameCourse": "Toeic 2",
            "img": "https://i.pinimg.com/564x/0d/fa/94/0dfa94b24f5252d8848dc3c57b2d2672.jpg",
            "price": 499.000,
          }
        ]
      }
    ]
  )
  return (
    <div style={{maxWidth:"1330px"}}>{courses.map((item) => (
        <ItemCourse key={Math.random() * Date.now()} course={item}/>
    ))}</div>
  )
}
