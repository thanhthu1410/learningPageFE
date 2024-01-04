import { useNavigate } from "react-router-dom"
import "./itemCourse.scss"
import {  Category, Course } from "@/interface/Interface";
interface Props {
    course: Category
}
export default function ItemCourse(props: Props) {
    const navigate = useNavigate();
    return (
        <div className='itemcourse_container'>
            <h3>{props.course.nameCategory} </h3>
            <div className='listcourse_container'>
                {props.course.listCourse?.map((item: Course) => (
                    <div key={Math.random() * Date.now()} className="item_content">
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                        <p>{item.price}vnd</p>
                        <div className="middle">
                            <div className="text" onClick={()=> navigate(`course/${item.id}`)}>Xem khóa học</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
