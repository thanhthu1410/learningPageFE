import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./blogCarousel.scss"
export default function BlogCarousel() {
  return (
    <div>
        
<Carousel
  autoPlay={true}
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={1500}
  centerMode={false}

  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
      desktop: {
          breakpoint: {
              max: 3000,
              min: 1024
          },
          items: 4,
          partialVisibilityGutter: 40
      },
      mobile: {
          breakpoint: {
              max: 464,
              min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
      },
      tablet: {
          breakpoint: {
              max: 1024,
              min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
      }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
<div><img src="https://i.pinimg.com/564x/f8/03/49/f803494e671d597b7d8141df888dee74.jpg" alt="" /></div>
  <div><img src="https://i.pinimg.com/564x/5e/69/b5/5e69b5c5d18be6864534ddf592650ed4.jpg" alt="" /></div>
  <div><img src="https://i.pinimg.com/736x/ae/e8/09/aee8091e3e24c934875f136d817e65c8.jpg" alt="" /></div>
  <div><img src="https://i.pinimg.com/564x/8a/e4/3b/8ae43b829dbc87d2f735d7c110325104.jpg" alt="" /></div>
</Carousel>;
    </div>
  )
}
