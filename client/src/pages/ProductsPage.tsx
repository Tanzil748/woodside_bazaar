import css from "../styles/ProductsPage.module.css";
import { Container, Row } from "react-bootstrap";
import { useFetchAllProductsQuery } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const { data, error, isLoading } = useFetchAllProductsQuery();

  return (
    <div>
      <Container>
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
