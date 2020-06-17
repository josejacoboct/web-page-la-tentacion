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
import React, {useState} from "react";

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
  Col,
  ButtonToolbar
} from "reactstrap";
import Drawer from 'react-drag-drawer'
import {AddDepModal} from '../examples/AddDepModal';
import { isConstructorDeclaration } from "typescript";
// core components

function SectionLogin() {

  const showEdenChocolate = () => {
    window.open('https://canastarosa.com/stores/la-tentacion/products/eden-de-chocolate-10918198');
  };

  const showAleman = () => {
    window.open('https://canastarosa.com/stores/la-tentacion/products/pastel-aleman-89110089​');
  };

  const showQuesoFresas = () => {
    window.open('https://canastarosa.com/stores/la-tentacion');
  };

  const showQuesoMocha = () => {
    window.open('https://canastarosa.com/stores/la-tentacion');
  };

  const showZanahoria = () => {
    window.open('https://canastarosa.com/stores/la-tentacion/products/pastel-de-zanahoria-98181811​');
  };

  const showPayManzana = () => {
    window.open('https://canastarosa.com/stores/la-tentacion');
  };

  const showProfiteroles = () => {
    window.open('https://canastarosa.com/stores/la-tentacion');
  };

  const showRedVelvet = () => {
    window.open('https://canastarosa.com/stores/la-tentacion/products/pastel-red-velvet-88101008');
  };

  let state = useState();
  state = {deps:[], addModalShow : false}

  /*constructor(props){
    super(props);
    this.state = {deps:[], addModalShow : false}
  }*/

  //const addModalShow = false

  let addModalClose =() => this.setState({addModalShow:false})


  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/fondo.jpg") + ")"
        }}
      >
        <Container>
            <div className="title">
              <h2>Pasteles</h2>
            </div>
            <Row>
              <Col md="3" sm="6" onClick={showEdenChocolate}>
                <h4 className="images-title">Edén de chocolate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/edenChocolate.jpeg")}
                />                
               
              </Col>
              <Col md="3" sm="6" onClick={showAleman}>
                <h4 className="images-title">Alemán</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelAleman.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6" onClick={showQuesoFresas}>
                <h4 className="images-title">Queso con fresas machacadas</h4>
                <img
                  /*height = "192px"//192px
                  width = "300px"*/
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelQuesoFresasMachacadas.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6" onClick={showQuesoMocha}>
                <h4 className="images-title">Queso mocha</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelQuesoMocha.jpeg")}
                />                
              </Col>            
            </Row>
            <Row>
              <Col md="3" sm="6" onClick={showZanahoria}>
                <h4 className="images-title">Zanahoria</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/pastelZanahoria.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6" onClick={showPayManzana}>
                <h4 className="images-title">Pay de manzana</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/payManzana.jpeg")}
                />                
              </Col>
              <Col md="3" sm="6" onClick={showProfiteroles}>
                <h4 className="images-title">Profiteroles</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/pasteles/profiteroles.jpeg")}
                />                
              </Col> 
              <Col md="3" sm="6" onClick={showRedVelvet}>
                <h4 className="images-title">Red Velvet</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                 src={require("assets/img/pasteles/pastelRedVelvet.jpeg")}
                />                                            
              </Col>         
            </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
