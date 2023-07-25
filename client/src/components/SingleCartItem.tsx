import { Row, Col, Button } from "react-bootstrap";
import css from "../styles/SingleCartItem.module.css";
import { addProductCart, decreaseProductCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ _id, img, name, category, price, cartQuantity }) => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col className="d-flex justify-content-between gy-2 px-3">
        <div className="d-flex align-items-center gap-4">
          <img src={img} alt={name} className={css.imgContainerSize} />
          <div>
            <div className="fw-bolder fs-4">{name}</div>
            <div className={css.categoryHeader}>Category: {category}</div>
          </div>
        </div>
        <div></div>
        <div className="align-self-center text-end fw-semibold">
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
        </div>
      </Col>
    </Row>
  );
};

export default SingleCartItem;
