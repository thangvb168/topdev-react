import React, { useRef } from 'react';
import ReactSlick from 'react-slick';
import { Prev, Next, DotsWithNav } from './Custom';

// Issue: When using Slider with flexbox -> should use 'min-h-0 min-w-0' to scale infinite width and height

const Slider = ({
  children,
  settings = {},
  className = 'min-w-0',
  style = '',
}) => {
  const sliderRef = useRef();
  if (!children || React.Children.count(children) === 0) return null;

  let defaultSettings = {
    slidesToShow: 3,
    infinite: false,
    variableWidth: false,
    nextArrow: <Next />,
    prevArrow: <Prev />,
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

  if (style === 'special') {
    defaultSettings = {
      slidesToShow: 3,
      infinite: false,
      variableWidth: false,
      dots: true,
      arrow: false,
      appendDots: dots => (
        <DotsWithNav
          dots={dots}
          onPrevClick={sliderRef?.current?.slickPrev}
          onNextClick={sliderRef?.current?.slickNext}
        />
      ),
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
  }

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className={className}>
      <ReactSlick ref={sliderRef} {...mergedSettings}>
        {children}
      </ReactSlick>
    </div>
  );
};

export default Slider;
