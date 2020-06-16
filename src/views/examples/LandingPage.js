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
                <h2 className="title">¿Quiénes somos?</h2>
                <h5 className="description">
                Somos una empresa mexicana dedicada a la elaboración de múltiples postres para el deleite de todos
                nuestros clientes. Utilizamos ingredientes de alta calidad e innovamos constantemente nuestro acervo 
                de recetas para brindarte la mejor experiencia en cada mordida. Además nos mantenemos al tanto de tus
                dudas y sugerencias para proporcionarte la atención ideal.
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
                    Puedes revisar la galería fotográfica con nuestros productos 
                    y descripciones de los mismos para hacerte una idea de lo que
                    puedes esperar de tu compra.
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
                    <h4 className="info-title">¡Sorpréndete con nuestras ideas!</h4>
                    <br></br>
                    <p>
                    Cada semana innovamos con postres distintos ya que tenemos innumerables sabores 
                    para complacer tu paladar. Podrás estar al tanto de dichas novedades al seguirnos a través 
                    de redes sociales donde igualmente podremos resolver cualquier duda que tengas.
                    Si te interesa modificar algún ingrediente del pastel que te interesa para probar una combinación
                    diferente o si quisieras un postre libre de gluten, vegano o con sustituto de azúcar, puedes 
                    contactarnos a través de Instagram y Facebook para realizar tu pedido especial con al menos 5
                    días de anticipación.
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
