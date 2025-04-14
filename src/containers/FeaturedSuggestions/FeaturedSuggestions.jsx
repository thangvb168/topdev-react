import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import CardJob from '@/components/CardJob';
import request from '@/utils/request';

const FeaturedSuggestions = () => {
  const [location, setLocation] = useState('All');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await request.get('/jobs');
        if (location !== 'All') {
          const filteredJobs = data.filter(
            job => job.location.name === location
          );
          setJobs(filteredJobs);
          return;
        }
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location]);

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
                isLoading={loading && location === loc}
                onClick={() => setLocation(loc)}
              >
                {loc}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <div>Loading</div>
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
                fullWidth={true}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSuggestions;
