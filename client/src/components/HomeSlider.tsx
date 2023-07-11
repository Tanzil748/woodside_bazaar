import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import css from "../styles/HomeSlider.module.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const HomeSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image className={css.carourselImg} src={slider1} alt="First slide" />
        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bolder text-white">Fresh Produce</h1>
          <p className="fw-bolder text-white">
            We obtain our produce and baked goods exclusively from farmers and
            local bakeries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className={css.carourselImg} src={slider2} alt="Second slide" />

        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bolder text-white">Empowering Farmers</h1>
          <p className="fw-bolder text-white">
            Our business model prioritizes supporting local farmers and small
            businesses.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className={css.carourselImg} src={slider3} alt="Third slide" />

        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bolder text-white">Fair Prices</h1>
          <p className="fw-bolder text-white">
            We price match our 100% organic fruits and vegetables!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
