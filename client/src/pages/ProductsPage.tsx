import css from "../styles/ProductsPage.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        {/* Filter Menu */}
        <Row className="bg-secondary my-3 py-2">
          <Col lg={9} />
          <Col lg={3}>
            <Form.Select
              aria-label="Product Price Filter"
              className={css.formSelectOutline}
            >
              <option>Sort By:</option>
              <option value="1">$ - $$$</option>
              <option value="2">$$$ - $</option>
              <option value="3">Category</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Product display */}
      </Container>
    </div>
  );
};

export default ProductsPage;
