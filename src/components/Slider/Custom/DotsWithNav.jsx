import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DotsWithNav = props => {
  let { dots, onPrevClick, onNextClick } = props;

  return (
    <div className="mt-4 flex items-center gap-2">
      <div
        className="hover:border-primary hover:text-primary flex size-6 items-center justify-center rounded-full border opacity-50 hover:opacity-100"
        onClick={onPrevClick}
      >
        <FontAwesomeIcon size="md" icon={faChevronLeft} />
      </div>
      <div className="flex items-center">
        {dots?.map(dot => {
          const isActive = dot?.props?.className === 'slick-active';
          const handleClick = dot.props.children.props.onClick;

          return (
            <div
              key={dot.key}
              className={`mx-1 h-2 rounded-full transition-all duration-300 ${
                isActive ? 'bg-primary w-4' : 'w-2 bg-gray-500'
              }`}
              onClick={handleClick}
            ></div>
          );
        })}
      </div>
      <div
        className="hover:border-primary hover:text-primary flex size-6 items-center justify-center rounded-full border opacity-50 hover:opacity-100"
        onClick={onNextClick}
      >
        <FontAwesomeIcon size="md" icon={faChevronRight} />
      </div>
    </div>
  );
};

export default DotsWithNav;
