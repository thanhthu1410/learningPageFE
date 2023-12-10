import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import "./carousel.scss"
import { useNavigate } from 'react-router-dom';
export default function CarouselComponent() {
  const slider = useRef<typeof Carousel>(null);
  const [banners, setBanners] = useState([
    {
      id: 1,
      url:"https://www.shutterstock.com/image-vector/english-colorful-typography-banner-260nw-1356202124.jpg" ,
      link: "/course",
      titleBtn: "Khóa Học"
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-vector/flat-twitch-banner-english-learning-lessons_23-2149253903.jpg",
      link:"/",
      titleBtn: "Khóa Học 1"
    },
    {
      id: 3,
      url: "https://as1.ftcdn.net/v2/jpg/03/11/56/20/1000_F_311562038_0fRC58sQRWxsFBXH5yTpjVE6Ri1pKgeA.jpg" ,
      titleBtn: "Khóa Học 2",
      link:"/",
    },
  ]);
const navigate = useNavigate()
  return (
    <div>
      <Carousel
       
        autoplay
        autoplaySpeed={2000}
        effect="fade"
        dots={true}
        dotPosition="bottom"
        waitForAnimate={true}
      >
        {banners.map((banner, index) => (
          <div className="items" key={banner.id + index}>
            <img className="items-img" src={banner.url} alt={`Banner ${banner.id}`} />
            <button className='btn_banner' onClick={() => navigate(`/${banner.link}`)}>{banner.titleBtn}</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
