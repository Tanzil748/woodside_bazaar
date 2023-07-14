import css from "../styles/ProductsPage.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useFetchAllProductsQuery } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const { data, error, isLoading } = useFetchAllProductsQuery();

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
        {isLoading ? (
          <p>Data loading...</p>
        ) : error ? (
          <p>Error occurred</p>
        ) : (
          <div>
            <Row className="gy-3 mb-2">
              {data.map((product) => (
                <div key={product._id} className={css.customCol}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;
