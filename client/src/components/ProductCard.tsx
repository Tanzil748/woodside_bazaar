import css from "../styles/ProductCard.module.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card className="position-relative h-100">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.name}
        className="h-100 object-fit-cover"
      />
      <div className="p-2">
        <Card.Title className={css.productTitle}>{product.name}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <p className={css.productPrice}>${product.price}</p>
          <Button
            className={css.addBtn}
            onClick={() => dispatch(addProductCart({ ...product }))}
          >
            ADD +
          </Button>
        </div>
      </div>
      <div className={css.categoryOverlay}>{product.category}</div>
    </Card>
  );
};

export default ProductCard;
