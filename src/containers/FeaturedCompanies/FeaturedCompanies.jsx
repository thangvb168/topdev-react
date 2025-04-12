import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';

const FeaturedCompanies = () => {
  return (
    <section id="featured-companies-container" className="mb-16">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-[3fr_12fr_5fr]">
          <div className="">Danh mục</div>
          <div className="">Công ty nổi bật</div>
          <div className="">Đề xuất cho bạn</div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCompanies;
