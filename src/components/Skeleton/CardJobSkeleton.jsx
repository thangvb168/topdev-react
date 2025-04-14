import React from 'react';

const CardJobSkeleton = ({ fullWidth = false, className = '' }) => {
  const cardClass = fullWidth ? 'w-full' : 'max-w-[20rem]';

  return (
    <div
      className={`rounded-lg bg-white p-4 shadow-lg ${cardClass} ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="size-12 animate-pulse overflow-hidden rounded bg-gray-200"></div>

        <div className="grow text-start">
          <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200"></div>
      </div>

      <div className="my-5 w-full border-t border-dashed"></div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="text-start">
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
export default CardJobSkeleton;
