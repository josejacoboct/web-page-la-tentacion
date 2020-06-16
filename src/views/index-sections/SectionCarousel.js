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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/pasteles/pastelZanahoria.jpeg"),
    altText: "Pastel de zanahoria",
    caption: "Pastel de zanahoria"
  },
  {
    src: require("assets/img/pasteles/pastelQuesoFresasMachacadas.jpeg"),
    altText: "Pastel de queso con fresas machacadas",
    caption: "Pastel de queso con fresas machacadas"
  },
  {
    src: require("assets/img/pasteles/edenChocolate.jpeg"),
    altText: "Edén de chocolate",
    caption: "Edén de chocolate"
  },
  {
    src: require("assets/img/pasteles/profiteroles.jpeg"),
    altText: "Profiteroles",
    caption: "Profiteroles"
  },
  {
    src: require("assets/img/pasteles/pastelAleman.jpeg"),
    altText: "Pastel Alemán",
    caption: "Pastel Alemán"
  },
  {
    src: require("assets/img/pasteles/pastelQuesoMocha.jpeg"),
    altText: "Pastel de queso sabor mocha",
    caption: "Pastel de queso sabor mocha"
  },
  {
    src: require("assets/img/pasteles/payManzana.jpeg"),
    altText: "Pay de manzana",
    caption: "Pay de manzana"
  },  
  {
    src: require("assets/img/pasteles/pastelRedVelvet.jpeg"),
    altText: "Pastel Red Velvet",
    caption: "Pastel Red Velvet"
  }  
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText}/>
                        <CarouselCaption
                          //captionText={item.caption}
                          captionHeader={item.caption}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
