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
    <img
      className={clsx(
        'h-[60px] w-full rounded-md object-cover text-center',
        borderClass,
        colorClasses[color] || colorClasses.default
      )}
      onError={handleImgError}
      src={imgSrc}
    />
  );
};

export default CompanyLogo;
