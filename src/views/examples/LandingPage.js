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
  CardBody,
  CardFooter,
  CardTitle,
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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionLogin from "views/index-sections/SectionLogin";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />  
      <SectionCarousel/>
      <SectionLogin/>
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">¿Quienes somos?</h2>
                <h5 className="description">
                  Somos una empresa mexicana dedicados a crear pasteles y postres para deleite de nuestros clientes,
                  utilizando productos de calidad e innovando constantemente nuestras recetas e ingredientes 
                  para darte la mejor experiencia tanto en atención como en el consumo de nuestros productos. 
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">¡Verifica nuestros productos!</h4>
                    <br></br>
                    <p className="description">
                    Puedes revisar la galería fotográfica de nuestros productos y 
                    saber exactamente qué puedes esperar de tu compra, ver los ingredientes empleados y, 
                    si deseas cambiar alguno u optar por versiones veganas, puedes hacérnoslo saber en 
                    nuestra tienda virtual.

                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">¡Sorprendete con nuestras ideas!</h4>
                    <br></br>
                    <p>
                    Cada semana innovamos con nuevos sabores y postres para darte lo mejor a ti, 
                    puedes seguirnos en nuestras redes sociales para estar al tanto de las novedades y resolver tus dudas 
                    sobre nuestros productos y nuestro servicio.
                    </p>
                    <Button className="btn-link" color="info" href="https://www.facebook.com/la.tentacion.original">
                      Facebook
                    </Button>
                    <Button className="btn-link" color="info" href="https://www.instagram.com/la.tentacion_/">
                      Instagram
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <DemoFooter/>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
