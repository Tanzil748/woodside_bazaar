import css from "../styles/CartPage.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCartItem from "../components/SingleCartItem";
import { useNavigate } from "react-router-dom";
import { clearAllCart, calcAllTotals } from "../redux/cartSlice";
import { ArrowRightAlt } from "@mui/icons-material";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calcAllTotals());
  }, [cart, dispatch]);

  return (
    <>
      <Container style={{ minHeight: "62vh" }}>
        <Row className="py-2">
          {cart.selectedProducts.length === 0 ? (
            <div className="d-flex flex-column align-items-center">
              <div className="lead fw-bolder">Cart is Empty</div>
              <p>Please add items to get order details</p>
              <Button
                className="fw-bolder"
                onClick={() => navigate("/products")}
              >
                Browse Store
              </Button>
            </div>
          ) : (
            <>
              <Col className={css.left}>
                <div className="px-3 py-2">
                  <h2 className="pb-2">Order Review</h2>
                  <div>
                    {cart.selectedProducts.map((item) => (
                      <SingleCartItem key={item._id} {...item} />
                    ))}
                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <Button
                      className="shadow-none border-0 bg-danger fw-light"
                      onClick={() =>
                        dispatch(clearAllCart(cart.selectedProducts))
                      }
                    >
                      Empty Cart
                    </Button>
                    <Button
                      className="fw-light"
                      onClick={() => navigate("/products")}
                    >
                      Continue Shopping
                      <ArrowRightAlt />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col className={css.right}>
                <div className="py-2 px-3">
                  <h2>Order Summary</h2>
                  <hr />
                  <Row className="flex-column">
                    <Col className="d-flex justify-content-between">
                      <p>Items:</p>
                      <p>${cart.totalPrice.toFixed(2)}</p>
                    </Col>
                    <Col className="d-flex justify-content-between">
                      <p>Shipping & Handling:</p>
                      <p>$0.00</p>
                    </Col>
                    <hr />
                    <Col className="d-flex justify-content-between">
                      <p>Order Total:</p>
                      <p>${cart.totalPrice.toFixed(2)}</p>
                    </Col>
                    <Button className="fw-bolder">Confirm Order</Button>
                  </Row>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
