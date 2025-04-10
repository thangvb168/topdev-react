import React from 'react';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderPrev = props => {
  const { onClick } = props;

  return (
    <div
      className="text-dark absolute top-1/2 left-12 z-10 size-12 -translate-y-1/2 opacity-50 hover:opacity-100"
      onClick={onClick}
    >
      <FontAwesomeIcon size="2xl" icon={faChevronCircleLeft} />
    </div>
  );
};

export default SliderPrev;
