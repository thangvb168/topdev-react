import React, { useState } from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from '@/components/Select';

const Hero = () => {
  const [location, setLocation] = useState('');

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
            <div className="bg-light mx-auto flex w-full flex-wrap gap-y-[10px] rounded-lg p-2 md:w-3/4">
              <div className="w-full md:w-3/5 md:pr-[10px]">
                <Input
                  size="extra"
                  placeholder="Công việc bạn đang tìm ?"
                  suffix={<FontAwesomeIcon size="xl" icon={faSearch} />}
                />
              </div>
              <div className="flex w-full items-center justify-center gap-x-[10px] md:w-2/5">
                <Select
                  value={location}
                  onChange={setLocation}
                  placeholder="Vị trí"
                >
                  <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                  <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
                  <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
                </Select>
                <Button block size={'md'}>
                  <span className="text-nowrap">Tìm kiếm</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-[10px]">
            <Button variant="outlined" color="primary">
              <span className="small-headline text-nowrap text-black">
                New Job
              </span>
            </Button>
            <Button variant="outlined" color="primary">
              <span className="small-headline text-nowrap text-black">
                Part Time
              </span>
            </Button>
            <Button variant="outlined" color="primary">
              <span className="small-headline text-nowrap text-black">
                Full Time
              </span>
            </Button>
            <Button variant="outlined" color="primary">
              <span className="small-headline text-nowrap text-black">
                Work from home
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
