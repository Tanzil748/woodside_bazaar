import { Row, Col, Button } from "react-bootstrap";
import css from "../styles/SingleCartItem.module.css";

const SingleCartItem = ({ img, name, category, price, quantity }) => {
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
              // onClick={() =>
              //   dispatch(decreaseCart({ _id, img, name, price, cartQuantity }))
              // }
            >
              -
            </Button>
            <div className="fw-bolder lead">{quantity}</div>
            <Button
              className={css.quantButton}
              // onClick={() =>
              //   dispatch(addToCart({ _id, img, name, price, cartQuantity }))
              // }
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
