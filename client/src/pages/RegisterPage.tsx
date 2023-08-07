import { useState, useEffect } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import css from "../styles/Register.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "../redux/authEndpoints";
import { setLocalUser } from "../redux/authSlice";
import { RootState } from "../redux/store";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();
  const { userInformation } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInformation) {
      navigate("/");
    }
  }, [navigate, userInformation]);

  const registerHandler = async (e) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const res = await register({ username, email, password }).unwrap();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      dispatch(setLocalUser({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error?.data);
    }
  };

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
            <Form onSubmit={registerHandler}>
              <h1 style={{ fontSize: "1.6rem" }}>Register Account</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="userName"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className={css.formButton}>
                Create Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
