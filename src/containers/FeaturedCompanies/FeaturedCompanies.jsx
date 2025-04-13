import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import CompanyLogo from '@/components/CompanyLogo';

const FeaturedCompanies = () => {
  return (
    <section id="featured-companies-container" className="mb-16">
      <Container>
        <div className="flex gap-x-16 gap-y-8">
          <div className="w-full md:w-1/5">
            <h2 className="heading-2 mb-4">Danh mục</h2>
            <div className="flex flex-col gap-2">
              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Việc làm IT
              </Button>
              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Tạo CV
              </Button>
              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Công ty IT
              </Button>
              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Trắc nghiệm tính cách
              </Button>
              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Blog
              </Button>

              <Button
                color="neutral"
                block
                align="left"
                className="small-headline"
              >
                Việc làm IT <span className="text-primary">Fresher</span>
              </Button>
              <Button
                variant="link"
                block
                align="left"
                className="small-headline"
              >
                Xem thêm
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-3/5">
            <h2 className="heading-2">Công ty nổi bật</h2>
            <div className="">
              <Slider
                settings={{
                  arrows: false,
                  variableWidth: true,
                  infinite: true,
                }}
              >
                <CompanyLogo
                  border
                  imgUrl="https://i.pinimg.com/736x/ab/56/f9/ab56f9d4bfaf6e2177592d3686477276.jpg"
                />
                <CompanyLogo
                  border
                  imgUrl="https://i.pinimg.com/736x/0c/50/8a/0c508acc1fe15b4b579ff26a9c19c050.jpg"
                />
                <CompanyLogo
                  border
                  imgUrl="https://i.pinimg.com/736x/f3/24/0a/f3240ad0d237afa68ae8a88e1782040f.jpg"
                />
                <CompanyLogo
                  border
                  imgUrl="https://i.pinimg.com/736x/1e/97/b2/1e97b2e0509fe509d7afce5c4e287b0d.jpg"
                />
                <CompanyLogo border />
              </Slider>
            </div>
            <div className="flex gap-4 p-2">
              <img
                src="https://i.pinimg.com/736x/db/a2/4f/dba24f703c99ab334da01191cb0636e3.jpg"
                alt="Thumbnail"
                className="h-[230px] max-w-[410px] object-cover"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="heading-1 text-primary">
                    mgm technology partners Vietnam
                  </h1>
                  <h2 className="display-2 text-primary">Up to 500$</h2>
                  <p className="description">Đà Nẵng, Hồ Chí Minh</p>
                </div>
                <div className="heading-2 text-primary text-end">8 Jobs</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5">Đề xuất cho bạn</div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCompanies;
