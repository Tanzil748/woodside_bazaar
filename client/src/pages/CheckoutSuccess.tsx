import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { calcAllTotals } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedProductQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calcAllTotals());
  }, [dispatch, selectedProductQuantity]);

  return (
    <>
      <Container style={{ minHeight: "62vh" }}>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <div>
              <div className="lead fw-bolder">Order Success!</div>
              <p>Checkout more goods in our store!</p>
              <Button
                className="fw-bolder bg-danger"
                style={{ border: "none" }}
                onClick={() => navigate("/products")}
              >
                Browse Store
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckoutSuccess;
