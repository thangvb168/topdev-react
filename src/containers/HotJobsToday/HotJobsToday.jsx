import React, { useEffect, useState } from 'react';
import CardJob from '@/components/CardJob';
import Slider from '@/components/Slider/Slider';
import request from '@/utils/request';

const HotJobsToday = () => {
  let settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '200px',
  };

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await request.get('/jobs');
        setJobs(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section id="hot-jobs-today-container" className="bg-primary-0 mb-16 py-12">
      <div className="text-center">
        <h1 className="heading-1 mb-4">Công việc Hot Hôm Nay</h1>
        <div className="py-4">
          <Slider settings={settings}>
            {loading ? (
              <>
                <div>Loading</div>
                <div>Loading</div>
                <div>Loading</div>
              </>
            ) : (
              jobs.map(job => (
                <CardJob
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  thumbnail={job.thumbnail}
                  type={job.type}
                  locationType={job.locationType}
                  salary={job.salary}
                  isBookmarked={job.isBookmarked}
                />
              ))
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotJobsToday;
