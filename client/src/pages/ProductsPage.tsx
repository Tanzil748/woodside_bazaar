import css from "../styles/ProductsPage.module.css";
import { Container, Row } from "react-bootstrap";
import { useFetchAllProductsQuery, ProductType } from "../redux/productSlice";
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
          <>
            <Row className="gy-3 my-2">
              {data?.map((product: ProductType) => (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <div key={product._id} className={css.customCol}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;
