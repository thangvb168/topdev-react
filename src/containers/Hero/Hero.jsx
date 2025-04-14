import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from '@/components/Select';
import request from '@/utils/request';
import CardJob from '@/components/CardJob';
import useDebounce from '@/hooks/useDebounce';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const locations = [
    {
      value: 'Tất cả',
      label: 'Tất cả',
    },
    {
      value: 'Hà Nội',
      label: 'Hà Nội',
    },
    {
      value: 'Hồ Chí Minh',
      label: 'Hồ Chí Minh',
    },
    {
      value: 'Đà Nẵng',
      label: 'Đà Nẵng',
    },
  ];

  const types = ['New Job', 'Full Time', 'Part Time', 'Work from home'];

  const fetchJobs = async () => {
    setLoading(true);
    try {
      let data = await request.get('/jobs');
      if (location !== '' && location !== 'Tất cả') {
        data = data.filter(job => job.location.name === location);
      }

      if (type !== '') {
        data = data.filter(job => job.type === type);
      }

      if (searchValue !== '') {
        data = data.filter(job =>
          job.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      console.log('Length:', data.length);
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleChangeOption = value => {
    setLocation(value);
  };

  const handleChangeValue = e => {
    setSearchValue(e.target.value.trim());
  };

  useEffect(() => {
    fetchJobs();
  }, [debouncedSearchValue, location, type]);

  return (
    <section id="hero-container" className="mt-[96px] mb-16">
      <Container>
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="https://topdev.vn/blog/wp-content/uploads/2020/08/logo-new-retina.png"
              alt="Banner Topdev"
              className="w-full object-cover px-6 sm:w-[400px] md:w-[600px] lg:w-[800px]"
            />
          </div>

          <div className="mb-8 w-full">
            <div className="bg-light/70 mx-auto flex w-full flex-wrap gap-y-[10px] rounded-lg p-2 md:w-3/4">
              <div className="w-full md:w-3/5 md:pr-[10px]">
                <Input
                  size="extra"
                  placeholder="Công việc bạn đang tìm ?"
                  suffix={<FontAwesomeIcon size="xl" icon={faSearch} />}
                  onChange={handleChangeValue}
                  value={searchValue}
                />
              </div>
              <div className="flex w-full items-center justify-center gap-x-[10px] md:w-2/5">
                <Select
                  value={location}
                  onChange={handleChangeOption}
                  placeholder="Vị trí"
                >
                  {locations.map(loc => (
                    <Select.Option key={loc.value} value={loc.value}>
                      {loc.label}
                    </Select.Option>
                  ))}
                </Select>
                <Button
                  onClick={fetchJobs}
                  block
                  isLoading={loading}
                  size={'md'}
                >
                  <span className="text-nowrap">Tìm kiếm</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-[10px]">
            {types.map(typeElem => {
              const isActive = type === typeElem;

              return (
                <Button
                  variant={isActive ? 'filled' : 'outlined'}
                  color="primary"
                  onClick={() => {
                    setType(isActive ? '' : typeElem);
                  }}
                >
                  <span className="small-headline text-nowrap text-black">
                    {typeElem}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {searchValue && (
          <>
            <h1 className="heading-1 mt-4">Kết quả tìm kiếm ({jobs.length})</h1>
            {jobs.length !== 0 ? (
              <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            ) : (
              <h1>Không tìm thấy kết quả phù hợp</h1>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Hero;
