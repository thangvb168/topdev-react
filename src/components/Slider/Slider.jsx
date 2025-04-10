import React from 'react';
import ReactSlick from 'react-slick';
import { SliderPrev, SliderNext } from './SliderArrow';

const Slider = props => {
  let { children, settings } = props;

  settings = {
    slidesToShow: 3,
    centerMode: true,
    infinite: true,
    nextArrow: <SliderNext />,
    prevArrow: <SliderPrev />,
    ...settings,
  };

  return <ReactSlick {...settings}>{children}</ReactSlick>;
};

export default Slider;
