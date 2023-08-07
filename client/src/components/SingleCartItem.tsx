import { Row, Col, Button } from "react-bootstrap";
import css from "../styles/SingleCartItem.module.css";
import { addProductCart, decreaseProductCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../redux/cartSlice";

const SingleCartItem = ({
  _id,
  img,
  name,
  category,
  price,
  cartQuantity,
}: Product) => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col className="gy-2">
        <div className="d-flex align-items-center gap-4">
          <img src={img} alt={name} className={css.imgContainerSize} />
          <div>
            <div className="fw-bolder fs-4">{name}</div>
            <div className={css.categoryHeader}>Category: {category}</div>
          </div>
        </div>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-end fw-semibold">
        <div className="fs-4">${price}</div>
        <div className={css.cartQuantityBox}>
          <Button
            className={css.quantButton}
            onClick={() =>
              dispatch(
                decreaseProductCart({
                  _id,
                  img,
                  name,
                  category,
                  price,
                  cartQuantity,
                })
              )
            }
          >
            -
          </Button>
          <div className="fw-bolder lead">{cartQuantity}</div>
          <Button
            className={css.quantButton}
            onClick={() =>
              dispatch(
                addProductCart({
                  _id,
                  img,
                  name,
                  category,
                  price,
                  cartQuantity,
                })
              )
            }
          >
            +
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default SingleCartItem;
