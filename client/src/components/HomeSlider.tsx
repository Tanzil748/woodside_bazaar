import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import css from "../styles/HomeSlider.module.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

type sliders = {
  id: string;
  title: string;
  subText: string;
  imageLink: string;
};

const HomeSlider = () => {
  const sliderData: sliders[] = [
    {
      id: "1",
      imageLink: slider1,
      title: "Fresh Produce",
      subText:
        "We obtain our produce and baked goods exclusively from farmers and local bakeries.",
    },
    {
      id: "2",
      imageLink: slider2,
      title: "Empowering Farmers",
      subText:
        "Our business model prioritizes supporting local farmers and small businesses.",
    },
    {
      id: "3",
      imageLink: slider3,
      title: "Fair Prices",
      subText: "We price match our 100% organic fruits and vegetables!",
    },
  ];
  return (
    <Carousel fade>
      {sliderData.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Image
            className={css.carourselImg}
            src={slide.imageLink}
            alt={`Slide ${slide.id}`}
          />
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h1 className="fw-bolder text-white">{slide.title}</h1>
            <p className="fw-bolder text-white">{slide.subText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
