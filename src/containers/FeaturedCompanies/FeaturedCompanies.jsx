import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';

const FeaturedCompanies = () => {
  return (
    <section id="featured-companies-container" className="mb-16">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-[3fr_12fr_5fr]">
          <div className="">
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
          <div>
            <h2 className="heading-2 mb-4">Công ty nổi bật</h2>
          </div>
          <div className="">Đề xuất cho bạn</div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCompanies;
