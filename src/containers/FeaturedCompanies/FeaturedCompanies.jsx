import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import CompanyLogo from '@/components/CompanyLogo';
import CardJob from '@/components/CardJob';

const FeaturedCompanies = () => {
  const menuItems = [
    'Việc làm IT',
    'Tạo CV',
    'Công ty IT',
    'Trắc nghiệm tính cách',
    'Blog',
    <>
      Việc làm IT <span className="text-primary">Fresher</span>
    </>,
  ];

  return (
    <section id="featured-companies-container" className="mb-16">
      <Container>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-4 sm:gap-x-1 md:grid-cols-[3fr_12fr_5fr] md:gap-x-16">
          <div className="sm:col-span-1 md:col-auto">
            <h2 className="heading-2 mb-4">Danh mục</h2>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {menuItems.map((item, idx) => (
                  <Button
                    key={idx}
                    color="neutral"
                    block
                    align="left"
                    className="small-headline"
                  >
                    <span className="line-clamp-1 text-nowrap">{item}</span>
                  </Button>
                ))}
              </div>

              <Button variant="link" block className="small-headline">
                <div className="w-full text-center md:text-left">Xem thêm</div>
              </Button>
            </div>
          </div>
          <div className="min-h-0 min-w-0 sm:col-span-2 md:col-auto">
            <h2 className="heading-2 mb-4">Công ty nổi bật</h2>
            <Slider>
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
            <div className="flex flex-col gap-4 p-2 lg:flex-row">
              <img
                src="https://i.pinimg.com/736x/db/a2/4f/dba24f703c99ab334da01191cb0636e3.jpg"
                alt="Thumbnail"
                className="w-max-full rounded-lg object-cover md:h-[230px] md:max-w-[410px]"
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
          <div className="min-w-0 sm:col-span-1 md:col-auto">
            <h2 className="heading-2 mb-4">Đề xuất cho bạn</h2>
            <Slider
              settings={{
                dots: true,
                slidesToShow: 1,
                variableWidth: false,
              }}
            >
              <CardJob fullWidth={true} />
              <CardJob fullWidth={true} />
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCompanies;
