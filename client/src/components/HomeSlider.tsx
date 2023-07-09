import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import css from "../styles/HomeSlider.module.css";

const HomeSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className={css.carourselImg}
          src="https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bolder text-white">Fresh Produce</h1>
          <p className="fw-bolder text-white">
            We obtain our produce and baked goods exclusively from farmers and
            local bakeries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={css.carourselImg}
          src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Second slide"
        />

        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bolder text-white">Empowering Farmers</h1>
          <p className="fw-bolder text-white">
            Our business model prioritizes supporting local farmers and small
            businesses.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={css.carourselImg}
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Third slide"
        />

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
