import React from 'react';
import ReactSlick from 'react-slick';
import { SliderPrev, SliderNext } from './SliderArrow';

const Slider = ({ children, settings = {}, className = 'w-full' }) => {
  if (!children || React.Children.count(children) === 0) return null;

  const defaultSettings = {
    className: 'slider variable-width',
    slidesToShow: 3,
    centerMode: true,
    infinite: false,
    variableWidth: false,
    nextArrow: <SliderNext />,
    prevArrow: <SliderPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className={className}>
      <ReactSlick {...mergedSettings}>{children}</ReactSlick>
    </div>
  );
};

export default Slider;
