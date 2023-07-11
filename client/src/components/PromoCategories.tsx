import css from "../styles/PromoCategories.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import big1 from "../assets/big1.jpg";
import small1 from "../assets/small1.jpg";
import small2 from "../assets/small2.jpg";
import small3 from "../assets/small3.jpg";
import small4 from "../assets/small4.jpg";

type Props = {};

const PromoCategories = (props: Props) => {
  return (
    <div>
      <Container>
        <Row className="mb-2 gy-3">
          <Col xs={12} lg={6} className="order-2 order-lg-1">
            {/* Added two nested rows for greater flexibility */}
            <Row>
              <Col>
                <div className={css.smallBox}>
                  <img
                    src={small1}
                    alt="sampleTitle"
                    className="img-fluid rounded-1"
                  />
                  <div className={css.smallBoxTextContainer}>
                    <h5 className={css.smallBoxTextTitle}>Fruits</h5>
                    <p className={css.smallBoxText}>
                      Handpicked, non-GMO, delicious fruits filled with juice!
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={css.smallBox}>
                  <img
                    src={small2}
                    alt="sampleTitle"
                    className="img-fluid rounded-1"
                  />
                  <div className={css.smallBoxTextContainer}>
                    <h5 className={css.smallBoxTextTitle}>Vegetables</h5>
                    <p className={css.smallBoxText}>
                      Locally grown, all organic, seasonal vegetables.
                      Guaranteed taste!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={css.smallBox}>
                  <img
                    src={small3}
                    alt="sampleTitle"
                    className="img-fluid rounded-1"
                  />
                  <div className={css.smallBoxTextContainer}>
                    <h5 className={css.smallBoxTextTitle}>Beverages</h5>
                    <p className={css.smallBoxText}>
                      Quench your thirst with teas, sodas, and more!
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={css.smallBox}>
                  <img
                    src={small4}
                    alt="sampleTitle"
                    className="img-fluid rounded-1"
                  />
                  <div className={css.smallBoxTextContainer}>
                    <h5 className={css.smallBoxTextTitle}>Sweets</h5>
                    <p className={css.smallBoxText}>
                      Enjoy our freshly baked goods delivered right out of the
                      oven!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="order-1 order-lg-2">
            <div className={css.bigBox}>
              <img
                src={big1}
                alt="sampleTitle"
                className="img-fluid rounded-1"
              />
              <div className={css.bigBoxText}>
                <h1 className="display-1 fw-bolder">Winter Sale!!!</h1>
                <h5 className="lead">
                  Checkout deals on a variety of fresh produce, spices, baked
                  goods and more!
                </h5>
                <p className="fst-italic">
                  **Up to <span className="fw-bold">50% OFF</span> on selected
                  items**
                </p>
                <Link to="/products">
                  <Button className={css.productRedirectButton}>
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoCategories;
