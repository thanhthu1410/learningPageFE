import { useParams } from "react-router-dom"
import "./detail.scss"

export default function BlogDetail() {
    const {id} = useParams()
    // id cua blog
  return (
    <div>
       <h2>Title nekk</h2>

    </div>
  )
}
