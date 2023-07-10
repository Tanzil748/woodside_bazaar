import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "../styles/Header.module.css";
import bazaarLogo from "../assets/icons8-instacart-45.png";
import {
  Container,
  Col,
  Row,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import {
  LocalPhone,
  LocalGroceryStore,
  PermIdentity,
  Search,
  ViewCompact,
} from "@mui/icons-material";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      {/* nav banner */}
      <div style={{ backgroundColor: "#035803" }} className="py-2 text-white">
        <Container>
          <Row
            className="d-flex align-items-center w-100"
            style={{ fontSize: "0.8rem" }}
          >
            <Col>Free Shipping On Orders Over $20</Col>
            <Col className="text-end">
              <LocalPhone fontSize="small" /> 1-800-FOOD
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar>
        <Container className="d-flex flex-column">
          {/* Top Nav */}
          <Row className="w-100 align-items-center">
            <Col xs={10} sm={11} lg={3}>
              <Navbar.Brand
                className="fw-bolder d-flex justify-content-between justify-content-md-start"
                href="/"
              >
                <div className="d-flex gap-1 align-items-center">
                  <img src={bazaarLogo} alt="Woodside Bazaar Logo" />
                  <div>
                    <span className="text-success">Woodside</span> Bazaar
                  </div>
                </div>
              </Navbar.Brand>
            </Col>

            {/* NOTE: I changed the order of the search field & the account/cart icon on medium & smaller screens */}

            {/* search field */}
            <Col sm={12} md={12} lg={6} className="order-2 order-lg-1">
              <InputGroup className="d-flex justify-content-center align-items-center">
                <Form.Control
                  placeholder="Search our store"
                  aria-label="Search our store"
                  aria-describedby="product-search-bar"
                />
                <InputGroup.Text id="product-search-bar">
                  <Search />
                </InputGroup.Text>
              </InputGroup>
            </Col>

            {/* account & cart */}
            <Col xs={2} sm={1} lg={3} className="order-1 order-lg-2">
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <NavDropdown
                  title={
                    <>
                      <PermIdentity />{" "}
                      <span className="d-none d-sm-inline">Account</span>
                    </>
                  }
                >
                  <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cart">
                  <Button type="button" className={css.cartButton}>
                    <LocalGroceryStore fontSize="small" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </Button>
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* bottom nav */}
      <div className="w-100 bg-body-tertiary py-2">
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-start">
              <Dropdown className="pr-5 d-none d-sm-block">
                <Dropdown.Toggle
                  className="bg-body-tertiary text-black border-0 d-flex align-items-center"
                  id="dropdown-basic"
                >
                  <ViewCompact />
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* NavLink to other pages */}
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <NavLink to="/" className={css.secondRowLink}>
                    HOME
                  </NavLink>
                  <span className={css.navLineBreak}>|</span>
                  <NavLink to="/products" className={css.secondRowLink}>
                    PRODUCTS
                  </NavLink>
                  <span className={css.navLineBreak}>|</span>
                  <NavLink to="/wishlist" className={css.secondRowLink}>
                    WISH LIST
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
