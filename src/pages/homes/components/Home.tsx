
import Sidebar from "@/components/sidebars/Sidebar";
import "./home.scss"
import CarouselComponent from "@/components/carousels/Carousel";
import Course from "../components/courses/Course";
import Blog from "./blogs/Blog";
import FeatureVideo from "./featureVideo/FeatureVideo";
export default function Home() {
  console.log("abc");
  
  return (
    <div className="home_container">
      <div className="home-container_right">
        <CarouselComponent />
        <Course />
        <Blog/>
        <FeatureVideo/>
      </div>
    </div>
  )
}
