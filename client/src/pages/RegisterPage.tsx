import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "../styles/Register.module.css";

const RegisterPage = () => {
  return (
    <div style={{ backgroundColor: "#AFE1AF" }}>
      {/* This centers the form on screen */}
      <Container className="d-flex align-items-center justify-content-center">
        <Row className={css.formOuterContainer}>
          {/* left image container */}
          <Col className={css.leftContainer}>
            <h3 className="text-white">Already have an account?</h3>
            <Link to="/login">
              <Button className={css.otherButton}>Log In</Button>
            </Link>
          </Col>

          {/* right side form */}
          <Col className={css.rightContainer}>
            <Form>
              <h1 style={{ fontSize: "1.6rem" }}>Register Account</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>User name</Form.Label>
                <Form.Control type="userName" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button className={css.formButton}>Create Account</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
