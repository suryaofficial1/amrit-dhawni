import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Terms = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={15} md={15}>
          <h1 className="text-center font-weight-bold">Shipping Information</h1>
          <p className="text-left text-black">
          <br></br>
            ➢On the product details page, we provide the estimated delivery times for each piece. <br></br><br></br>
            ➢ We offer free shipping on all orders within India. For international orders, we offer free shipping on orders over Rs.39,999/- and a small shipping fee on orders below Rs.39,999/-.<br></br><br></br>
            ➢ Taxes and duties are included in the price of every product listed on the Website for delivery within India.<br></br><br></br>
            ➢ For shipments outside India, customs duties and local taxes must be paid by the customer to our shipping partner. Custom duties and local taxes are determined by the laws of your destination country.<br></br>
            ➢ The delivery time for your order begins when you receive your Order Confirmation.<br></br><br></br>
            ➢ It is possible for a designer to not be able to create your order due to unforeseen circumstances. If this occurs, you will be offered a refund/credit note/alternate option.<br></br> <br></br>
            ➢ For deliveries we use FedEx, UPS, and Delhivery, which are all reliable courier companies.<br></br> <br></br>
            ➢ Our shipping confirmation email will provide you with a tracking number and a link to our courier company so you can track your order.<br></br> <br></br>
            ➢ There may be times when orders are delayed for reasons outside of our control. For some unforeseen reasons, your order may be delayed beyond the estimated delivery time by more than two weeks. We will contact you to see if you would still like to proceed. If you would like more details on shipping, please refer to our Terms of Service.<br></br><br></br>
            ➢ You can only return or exchange an item once per order. Whenever an international order is placed, all shipments will be clubbed and sent together. <br></br> <br></br>
          </p>
      </Col>
      </Row>
    </Container>
  );
};

export default Terms;
