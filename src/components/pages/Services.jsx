import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../../styles/service.css"

export default function Service() {
  return (
    <Container fluid className="service">
      <Row className="shopify">
        <div>
          <h2>
            Connect on <span>Shopify</span>
          </h2>
          <p>
            Make shopping experience easier with our augmented reality and 3D
            product on your shopify store.
          </p>
          <button>Integrate</button>
        </div>
      </Row>

      <Container className="service-info">
        <h3 className="head">
          Easy steps for an <span>unmatched</span> experience
        </h3>
        <Row className="justify-content-md-center">
          <Col className="div" xs={4}>
            <img src={"/icon1.png"} alt="" />
            <h4>
              Download <span>Rjwada</span> app
            </h4>
            <p>
              Install the rjwada app on your shopify store to enable the AR and
              3D experience.
            </p>
            <button>install</button>
          </Col>

          <Col className="div" sx={4}>
            <img src={"/icon2.png"} alt="" />
            <h4>Create an account</h4>
            <p>
              Make an account and login to our dashboard to enjoy the AR
              technology
            </p>
            <button>Signup</button>
          </Col>
          <Col className="div" sx={4}>
            <img src={"/icon3.png"} alt="" />
            <h4>Upload for 3D models</h4>
            <p>Upload your product to get the 3D models with one click. </p>
          </Col>
        </Row>
      </Container>

      <Container className="view">
        <Row>
          <Col sx={6}>
            <div className="toggle-buttons">
              <button className="toggle-button1">3d View</button>
              <button className="toggle-button2">View in Room</button>
            </div>
            <div className="demo-image">
              <img src="/sofa.png" alt="" />
            </div>
          </Col>
          <Col sx={6}>
            <h3>High customer retention and increased sales</h3>
            <p>
              71% of consumers say they would shop more often if they used
              augmented reality,
              <br />
              <br />
              With another 61% of consumers saying they prefer retailers that
              offer such experiences.
              <br />
              <br />
              Increased sales and less return
            </p>
            <br />
            <button className="demo-button">SEE DEMO</button>
          </Col>
        </Row>
      </Container>

      <Container className="justify-content-md-center">
        <div className="why">
          <Row className="py-5">
            <h2 className="text-center" style={{ marginLeft: -30 }}>
              Why choose <span>Rjwada?</span>
            </h2>

            <Col md={6}>
              <img src={"/icon4.png"} alt="" />
              <h3>
                <span>Enhancing</span>
              </h3>
              <p>
                the overall online shopping experience for customers
                <br />
                with our inbuilt technology.
                <br />
                Lets take a closer look.
              </p>
            </Col>
            <Col md={6}>
              <img src={"/logo.png"} alt="" style={{ width: 60, margin: -7 }} />
              <h3>
                <span>Confidence</span>
              </h3>
              <p>
                to customers for choosing <br />
                the best product. 71% of consumers say they would shop <br />
                more often if they used augmented reality,
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <img src={"/icon6.png"} alt="" />
              <h3>
                <span>3D Models</span>
              </h3>
              <p>
                which will bring life to <br />
                your digital product. Making shopping more fun.
              </p>
            </Col>
            <Col>
              <img src={"/icon5.png"} alt="" />
              <h3>
                <span>Integration</span>
              </h3>
              <p>
                we provide hassle free integration for your
                <br />
                integration.
              </p>
            </Col>
          </Row>

          <div className="connect">
            <Row>
              <Col>
                <h2>rjwada</h2>
              </Col>
              <Col>
                <h3>We're here to help your bussines</h3>
                <button className="connect-button">Let's Connect</button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Container>
  );
}