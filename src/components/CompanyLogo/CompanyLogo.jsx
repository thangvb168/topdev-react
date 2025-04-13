import React, { useState } from 'react';
import clsx from 'clsx';

const CompanyLogo = props => {
  let { imgUrl, border = false, color = 'default' } = props;

  const borderClass = border ? 'border' : '';
  const colorClasses = {
    default: 'border-neutral-400',
    white: 'border-white',
    black: 'border-black',
    primary: 'border-primary',
    neutral: 'border-neutral-400',
  };

  const [imgSrc, setImgSrc] = useState(
    imgUrl || '/img/fallback/thumbnail-fallback.jpg'
  );

  const handleImgError = () => {
    setImgSrc('/img/fallback/thumbnail-fallback.jpg');
  };

  return (
    <div
      className={clsx(
        'mx-4 h-[60px] rounded-md text-center',
        borderClass,
        colorClasses[color] || colorClasses.default
      )}
    >
      <img
        className="h-full w-full rounded-lg object-cover"
        onError={handleImgError}
        src={imgSrc}
      />
    </div>
  );
};

export default CompanyLogo;
