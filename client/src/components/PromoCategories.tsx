import css from "../styles/PromoCategories.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    src="https://images.unsplash.com/photo-1455998781417-e75917915b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZydWl0JTIwdG8lMjBvbmUlMjBzaWRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
                    src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmslMjB3aXRoJTIwc29saWQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                    src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rJTIwd2l0aCUyMHNvbGlkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
                    src="https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjB3aXRoJTIwc29saWQlMjBjb2xvciUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
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
