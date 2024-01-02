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
                        <img src="https://thumbs.dreamstime.com/z/english-british-england-language-education-concept-58368527.jpg" alt="" />
                        <p>{item.name}</p>
                        <p>999.000vnd</p>
                        <div className="middle">
                            <div className="text" onClick={()=> navigate(`course/${item.id}`)}>Xem khóa học</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
