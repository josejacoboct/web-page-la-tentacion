/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
            <div className="title">
              <h2>Pasteles</h2>
            </div>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Alemán</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelAleman.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Queso con fresas machacadas</h4>
                <img
                  height = "192px"//192px
                  width = "300px"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelQuesoFresasMachacadas.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Queso mocha</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelQuesoMocha.jpeg")}
                />                
              </Col>            
            </Row>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Zanahoria</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelZanahoria.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Pay de manzana</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/payManzana.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Profiteroles</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/profiteroles.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>            
            </Row>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6">
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
              </Col>            
            </Row>
            
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
