import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faLaptop,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const CardJob = props => {
  let {
    thumbnail,
    title = 'Title',
    salary = 0,
    locationType = 'Onsite',
    type = 'Full Time',
    description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isBookmarked = false,
    fullWidth = false,
    onBookmarkToggle,
    onClick = () => {},
    className = '',
  } = props;

  const [imgSrc, setImgSrc] = useState(
    thumbnail || '/img/fallback/thumbnail-fallback.jpg'
  );

  const handleImgError = () => {
    setImgSrc('/img/fallback/thumbnail-fallback.jpg');
  };

  const handleBookmardClick = e => {
    if (onBookmarkToggle) {
      onBookmarkToggle(!isBookmarked);
    }
  };

  const handleClick = e => {
    if (onClick) {
      onClick();
    }
  };

  const bookmarkClass = isBookmarked
    ? 'text-warning-2 hover:text-black'
    : 'text-black hover:text-warning-2';

  const cardClass = fullWidth ? 'w-full' : 'max-w-[20rem]';

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg p-4 shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 ${cardClass} ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="size-12 overflow-hidden rounded-full">
          <img
            src={imgSrc}
            alt="Thumbnail"
            className="h-full w-full object-cover"
            onError={handleImgError}
          />
        </div>
        <div className="grow">
          <h1 className="display-2 line-clamp-1">{title}</h1>
          <p className="text-primary extra-small">
            Up to {Math.round(salary)}$
          </p>
        </div>
        <div onClick={handleBookmardClick} className={bookmarkClass}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
      <div className="my-5 w-full border-t border-dashed"></div>
      <div className="flex flex-col gap-2">
        <div className="text-neutral-7 flex gap-4">
          <span>
            <FontAwesomeIcon icon={faLaptop} /> {locationType}
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> {type}
          </span>
        </div>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default CardJob;
