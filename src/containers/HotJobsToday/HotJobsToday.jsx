import React, { useEffect, useState } from 'react';
import CardJob from '@/components/CardJob';
import Slider from '@/components/Slider/Slider';
import request from '@/utils/request';
import { CardJobSkeleton } from '@/components/Skeleton';

const HotJobsToday = () => {
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
    // #EB2702_3%,#FF7D25_75%,#FF9D5A_100%
    <section
      id="hot-jobs-today-container"
      className="mb-16 overflow-hidden bg-gradient-to-r from-[#eb2702]/10 from-[3%] via-[#ff7d25]/10 via-75% to-[#FF9D5A]/10 py-12"
    >
      <div className="text-center">
        <h1 className="heading-1 mb-4 bg-gradient-to-r from-[#eb2702] from-[3%] via-[#ff7d25] via-75% to-[#FF9D5A] bg-clip-text text-transparent">
          Công việc Hot Hôm Nay
        </h1>
        <div className="py-4">
          <Slider
            arrows={true}
            variant="customArrows"
            variableWidth={true}
            infinite={true}
            centerMode={true}
            responsives={{
              md: {
                centerMode: true,
                variableWidth: false,
              },
            }}
          >
            {loading
              ? [1, 2, 3, 4, 5, 6].map(index => (
                  <CardJobSkeleton key={index} fullWidth={false} />
                ))
              : jobs.map(job => (
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
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotJobsToday;
