import React, { useState } from 'react';

const CardCompany = ({ imgUrl = '' }) => {
  const [imgSrc, setImgSrc] = useState(
    imgUrl || '/img/fallback/thumbnail-fallback.jpg'
  );

  const handleImgError = () => {
    setImgSrc('/img/fallback/thumbnail-fallback.jpg');
  };

  return (
    <div className="mx-4 h-[60px] text-center">
      <img
        className="h-full w-full object-cover"
        onError={handleImgError}
        src={imgSrc}
        alt=""
      />
    </div>
  );
};

export default CardCompany;
