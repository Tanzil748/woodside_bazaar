import css from "../styles/ProductsPage.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { seederData } from "../tempData/seeder";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        {/* Filter Menu */}
        <Row className="bg-success my-3 py-2">
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
        <Row className="gy-3 mb-2">
          {seederData.map((product, index) => (
            <div key={index} className={css.customCol}>
              <ProductCard product={product} />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;
