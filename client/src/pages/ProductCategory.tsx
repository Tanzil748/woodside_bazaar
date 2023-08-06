import css from "../styles/ProductsPage.module.css";
import { Container, Row } from "react-bootstrap";
import { useFetchProductByCategoryQuery } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, error, isLoading } =
    useFetchProductByCategoryQuery(selectedCategory);

  // Update the selected category when the URL parameter changes
  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  return (
    <div>
      <Container>
        {isLoading ? (
          <div>Data loading...</div>
        ) : error ? (
          <p>Error occurred...</p>
        ) : (
          <div>
            <Row className="gy-3 my-2">
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

export default ProductCategory;
