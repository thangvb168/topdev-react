import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardBlog = props => {
  let {
    id = 1,
    title = 'Title',
    content = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    field = 'Field',
    imgUrl,
    createdAt = '2023-01-01T00:00:00Z',
  } = props;

  const [imgSrc, setImgSrc] = useState(
    imgUrl || '/img/fallback/thumbnail-fallback.jpg'
  );

  const handleImgError = () => {
    setImgSrc('/img/fallback/thumbnail-fallback.jpg');
  };

  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative gap-3 rounded-lg shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1">
      <div className="bg-neutral-4/70 absolute top-2 right-2 rounded-full px-4 py-2">
        {field}
      </div>
      <div className="h-[240px] overflow-hidden rounded-t-lg">
        <img
          src={imgSrc}
          alt="Image"
          className="h-full w-full object-cover"
          onError={handleImgError}
        />
      </div>
      <div className="p-4">
        <div className="me-[74px] mb-3">
          <h2 className="display-2 mb-3">{title}</h2>
          <p className="body-1 text-neutral-7 line-clamp-2">{content}</p>
        </div>
        <div className="flex justify-between">
          <div className="small-headline text-neutral-6">{formattedDate}</div>
          <div className="small-headline text-primary">
            Read More
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
