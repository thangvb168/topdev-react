import React from 'react';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderNext = props => {
  const { onClick } = props;

  return (
    <div
      className="text-dark absolute top-1/2 right-12 z-10 size-12 -translate-y-1/2 opacity-50 hover:opacity-100"
      onClick={onClick}
    >
      <FontAwesomeIcon size="2xl" icon={faChevronCircleRight} />
    </div>
  );
};

export default SliderNext;
