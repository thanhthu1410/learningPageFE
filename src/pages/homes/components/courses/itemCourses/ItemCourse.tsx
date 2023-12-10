import "./itemCourse.scss"
interface Props {
    course: {
        id: number,
        nameCategory: string,
        listCourse: any
    }
}
export default function ItemCourse(props: Props) {
    return (
        <div className='itemcourse_container'>
            <h3>{props.course.nameCategory} </h3>
            <div className='listcourse_container'>
                {props.course.listCourse?.map((item: any) => (
                    <div key={Math.random() * Date.now()} className="item_content">
                        <img src={item.img} alt="" />
                        <p>{item.nameCourse}</p>
                        <span>{item.price}</span>
                        <div className="middle">
                            <div className="text">Xem khóa học</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
