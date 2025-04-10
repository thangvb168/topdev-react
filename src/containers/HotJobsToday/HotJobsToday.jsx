import React from 'react';
import CardJob from '@/components/CardJob';
import Slider from '@/components/Slider/Slider';

const HotJobsToday = () => {
  let settings = {
    centerPadding: '200px',
  };

  return (
    <section id="hot-jobs-today-container" className="bg-primary-0 mb-16 py-12">
      <div className="text-center">
        <h1>Công việc Hot Hôm Nay</h1>
        <div className="my-4">
          <Slider settings={settings}>
            <CardJob
              className="mx-auto"
              thumbnail="https://i.pinimg.com/736x/d1/02/dd/d102dd4829a1a7d572bbcfbea40c6a5a.jpg"
            />
            <CardJob
              className="mx-auto"
              thumbnail="https://i.pinimg.com/736x/d1/02/dd/d102dd4829a1a7d572bbcfbea40c6a5a.jpg"
            />
            <CardJob
              className="mx-auto"
              thumbnail="https://i.pinimg.com/736x/d1/02/dd/d102dd4829a1a7d572bbcfbea40c6a5a.jpg"
            />
            <CardJob
              className="mx-auto"
              thumbnail="https://i.pinimg.com/736x/d1/02/dd/d102dd4829a1a7d572bbcfbea40c6a5a.jpg"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotJobsToday;
