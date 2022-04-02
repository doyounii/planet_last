import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Sliders.css";

//children이 <Sliders index={}>여기!!!!!</Sliders>
export function Sliders({ dots, index, children }) {
  var settings = {
    dots: dots,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
  };
  return (
    <Container>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  min-height: 0;
  min-width: 0;
  width: 96%;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div .row {
    display: flex !important;
    flex-direction: row;
  }
`;
