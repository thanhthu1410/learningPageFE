import "./featureVideo.scss"
import { Link } from 'react-router-dom'

export default function FeatureVideo() {
    const listVideo = [
        {
            title: 'Video 1',
           
            urlYoutube: "https://www.youtube.com/embed/DpvYHLUiZpc?si=cZDe-puyUEe29m6x"
        },
        {
            title: 'Video 2',
         
            urlYoutube: "https://www.youtube.com/embed/DpvYHLUiZpc?si=cZDe-puyUEe29m6x"
        },
        {
            title: 'Video 3',
           
            urlYoutube: "https://www.youtube.com/embed/DpvYHLUiZpc?si=cZDe-puyUEe29m6x"
        
        }
    ]
  return (
    <div className="featureVideo_container">
    <h3>Feature Video</h3>
    <div className="featureVideo_container_chirld">
     {listVideo.map((item) => (
            <div className="featureVideo_item">
                  <iframe src={item.urlYoutube} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            <p>{item.title}</p>
            <div className="middle">
                <Link className="text" target="_blank" to={item.urlYoutube}>Xem Video</Link>
            </div>
       </div>
        )  )} 
    </div>
</div>
  )
}
