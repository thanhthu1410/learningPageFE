import { useState } from "react"
import "./course.scss"
import ItemCourse from "./itemCourses/ItemCourse"
import { Category } from "@/interface/Interface"

interface Props{
    categoryCourseData: Category[]
}
export default function CourseComponent(props: Props) {
 
  return (
    <div style={{maxWidth:"1330px"}}>{props.categoryCourseData.map((item: Category) => (
        <ItemCourse key={Math.random() * Date.now()} course={item}/>
    ))}</div>
  )
}
