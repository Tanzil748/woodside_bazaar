import css from "../styles/CartPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCartItem from "../components/SingleCartItem";
import { useNavigate } from "react-router-dom";
import { clearAllCart } from "../redux/cartSlice";

const CartPage = () => {
  const { selectedProducts, selectedProductQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="py-2">
          <Col className={css.left}>
            {selectedProducts.length === 0 ? (
              <div className="pt-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="lead fw-bolder">Cart is Empty</div>
                  <p>Please add items to get order details</p>
                </div>
              </div>
            ) : (
              <div className="px-3 py-2">
                <h2 className="pb-2">Order Review</h2>
                <div>
                  {selectedProducts.map((item, index) => (
                    <SingleCartItem
                      key={index}
                      {...item}
                      quantity={selectedProductQuantity}
                    />
                  ))}
                </div>
                <div className="d-flex justify-content-between pt-4">
                  <Button
                    className="shadow-none border-0 bg-danger fw-bolder"
                    onClick={() => dispatch(clearAllCart({ selectedProducts }))}
                  >
                    Empty Cart
                  </Button>
                  <Button
                    className="fw-bolder"
                    onClick={() => navigate("/products")}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </Col>
          <Col className={css.right}>
            <div className="py-2 px-3">
              <h2>Order Summary</h2>
              <hr />
              <Row className="flex-column">
                <Col className="d-flex justify-content-between">
                  <p>Items:</p>
                  <p>$29.99</p>
                </Col>
                <Col className="d-flex justify-content-between">
                  <p>Shipping & Handling:</p>
                  <p>$0.00</p>
                </Col>
                <hr />
                <Col className="d-flex justify-content-between">
                  <p>Order Total:</p>
                  <p>{totalPrice.toFixed(2)}</p>
                </Col>
                <Button>Confirm Order</Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
