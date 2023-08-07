import css from "../styles/PromoBanner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  DirectionsCarFilled,
  AttachMoney,
  AccessTime,
  CreditCard,
} from "@mui/icons-material";

const PromoBanner = () => {
  return (
    <div className="my-3">
      <Container className="bg-body-tertiary py-3">
        <Row className="gy-3">
          <Col className="d-flex gap-2" md={6} lg={3}>
            <DirectionsCarFilled className={css.promoIcons} />
            <div className={css.promoRightBox}>
              <p className={css.promoTitle}>FREE SHIPPING AND RETURN</p>
              <p className={css.blurb}>
                All orders above $20 bucks get free shipping
              </p>
            </div>
          </Col>
          <Col className="d-flex gap-2" md={6} lg={3}>
            <AttachMoney className={css.promoIcons} />
            <div className={css.promoRightBox}>
              <p className={css.promoTitle}>MONEY BACK GUARANTEE</p>
              <p className={css.blurb}>We always make it right!</p>
            </div>
          </Col>
          <Col className="d-flex gap-2" md={6} lg={3}>
            <AccessTime className={css.promoIcons} />
            <div className={css.promoRightBox}>
              <p className={css.promoTitle}>LONG HOURS</p>
              <p className={css.blurb}>We remain open from 8AM to 11PM</p>
            </div>
          </Col>
          <Col className="d-flex gap-2" md={6} lg={3}>
            <CreditCard className={css.promoIcons} />
            <div className={css.promoRightBox}>
              <p className={css.promoTitle}>ONLINE ORDERS</p>
              <p className={css.blurb}>
                Place orders from the ease of your home
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoBanner;
