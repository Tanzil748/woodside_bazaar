import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import css from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="py-2 text-white" style={{ backgroundColor: "#035803" }}>
      <Container>
        <Row>
          <Col>
            <h4 className={css.colHeader}>About Us</h4>
            <p className={css.subText}>History</p>
            <p className={css.subText}>Purpose</p>
            <p className={css.subText}>Calender</p>
          </Col>
          <Col>
            <h4 className={css.colHeader}>Legal</h4>
            <p className={css.subText}>Corporate</p>
          </Col>
          <Col>
            <h4 className={css.colHeader}>Company</h4>
            <p className={css.subText}>Press</p>
            <p className={css.subText}>Careers</p>
            <p className={css.subText}>Franchise</p>
          </Col>
          <Col>
            <h4 className={css.colHeader}>Social Media</h4>
            <div className="d-flex gap-1">
              <Link to="#">
                <Facebook className={css.socialMediaLogo} />
              </Link>
              <Link to="#">
                <Instagram
                  className={css.socialMediaLogo}
                  style={{ color: "#dd2a7b" }}
                />
              </Link>
              <Link to="#">
                <LinkedIn className={css.socialMediaLogo} />
              </Link>
              <Link to="#">
                <Twitter className={css.socialMediaLogo} />
              </Link>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className={css.bottomRow}>
          <Col>©Woodside Bazaar</Col>
          <Col className="text-end">
            This is a fake business, solely meant for my portfolio
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
