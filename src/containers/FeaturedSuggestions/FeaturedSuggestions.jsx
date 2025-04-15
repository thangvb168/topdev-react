import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import CardJob from '@/components/CardJob';
import request from '@/utils/request';
import { CardJobSkeleton } from '@/components/Skeleton';
import clsx from 'clsx';

const FeaturedSuggestions = () => {
  const [location, setLocation] = useState('All');
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await request.get('/jobs');
        setAllJobs(data);
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (location === 'All') {
      setJobs(allJobs);
    } else {
      const filteredJobs = allJobs.filter(
        job => job.location.name === location
      );
      setJobs(filteredJobs);
    }
  }, [location, allJobs]);

  const locations = ['All', 'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'];

  return (
    <section id="featured-suggestions-container" className="mb-16">
      <Container>
        <div className="mb-8">
          <h1 className="heading-1 mb-4">
            Gợi ý <span className="text-primary">nổi bật</span>
          </h1>
          <div className="flex gap-2">
            {locations.map(loc => (
              <Button
                key={loc}
                color={location === loc ? 'primary' : 'neutral'}
                onClick={() => setLocation(loc)}
              >
                <span
                  className={clsx(
                    'font-semibold',
                    location === loc ? 'text-white' : 'text-black'
                  )}
                >
                  {loc}
                </span>
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? [1, 2, 3, 4].map(index => (
                <CardJobSkeleton
                  key={index}
                  fullWidth={true}
                  className="h-[400px]"
                />
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
                  fullWidth={true}
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSuggestions;
