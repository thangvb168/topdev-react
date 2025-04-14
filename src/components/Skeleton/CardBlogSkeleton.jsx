import React from 'react';

const CardBlogSkeleton = () => {
  return (
    <div className="relative rounded-lg shadow-lg">
      <div className="absolute top-2 right-2 h-8 w-16 animate-pulse rounded-full bg-gray-200"></div>

      <div className="h-[240px] animate-pulse overflow-hidden rounded-t-lg bg-gray-200">
        {' '}
      </div>

      <div className="p-4">
        <div className="me-[74px] mb-3">
          <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="mt-4 flex justify-between">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardBlogSkeleton;
