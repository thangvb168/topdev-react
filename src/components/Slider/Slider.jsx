import React, { useRef } from 'react';
import ReactSlick from 'react-slick';
import { Prev, Next, DotsWithNav } from './Custom';
import clsx from 'clsx';

// Issue: When using Slider with flexbox -> should use 'min-h-0 min-w-0' to scale infinite width and height

const BREAKPOINT_MAP = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const Slider = props => {
  let {
    children,
    className = '',
    slidesToShow = 1,
    slidesToScroll,
    variableWidth = true,
    arrows = false,
    dots = false,
    variant = 'default',
    autoplay = false,
    centerMode = false,
    infinite = true,
    speed = 500,
    responsives = {},
    settings = {},
  } = props;

  const sliderRef = useRef();

  if (!children || React.Children.count(children) === 0) {
    return null;
  }

  if (React.Children.count(children) < slidesToShow) {
    slidesToShow = React.Children.count(children);
  }

  const responsiveSettings = Object.entries(responsives).map(
    ([key, value]) => ({
      breakpoint: BREAKPOINT_MAP[key] || parseInt(key),
      settings: value,
    })
  );

  let settingSlider = {
    slidesToShow,
    slidesToScroll: slidesToScroll || slidesToShow,
    arrows,
    dots,
    autoplay,
    centerMode,
    infinite,
    speed,
    variableWidth,
    rows: 1,
    responsive: responsiveSettings,
    ...settings,
  };

  const variantSettings = {
    default: {},
    customArrows: {
      arrows: true,
      nextArrow: <Next />,
      prevArrow: <Prev />,
    },
    customDotsWithArrow: {
      dots: true,
      appendDots: dots => (
        <DotsWithNav
          dots={dots}
          onPrevClick={sliderRef?.current?.slickPrev}
          onNextClick={sliderRef?.current?.slickNext}
        />
      ),
    },
  };

  settingSlider = {
    ...settingSlider,
    ...(variantSettings[variant] || {}),
  };

  return (
    <div className={clsx('min-h-0 min-w-0', className)}>
      <ReactSlick ref={sliderRef} {...settingSlider}>
        {children.map((elem, index) => (
          <div className="px-4 outline-none">{elem}</div>
        ))}
      </ReactSlick>
    </div>
  );
};

export default Slider;
