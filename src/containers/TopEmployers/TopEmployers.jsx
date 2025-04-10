import React from 'react';
import Container from '../Container';
import Slider from '@/components/Slider';
import CardCompany from './CardCompany';

const TopEmployers = () => {
  let settings = {
    arrows: false,
    variableWidth: true,
    autoplay: true,
  };

  return (
    <section id="top-employers-container" className="mb-16">
      <Container>
        <h1 className="mb-8">Nhà tuyển dụng hàng đầu</h1>
      </Container>
      <div>
        <Slider settings={settings}>
          <CardCompany imgUrl="https://i.pinimg.com/736x/ab/56/f9/ab56f9d4bfaf6e2177592d3686477276.jpg" />
          <CardCompany imgUrl="https://i.pinimg.com/736x/0c/50/8a/0c508acc1fe15b4b579ff26a9c19c050.jpg" />
          <CardCompany imgUrl="https://i.pinimg.com/736x/f3/24/0a/f3240ad0d237afa68ae8a88e1782040f.jpg" />
          <CardCompany imgUrl="https://i.pinimg.com/736x/1e/97/b2/1e97b2e0509fe509d7afce5c4e287b0d.jpg" />
          <CardCompany />
        </Slider>
      </div>
    </section>
  );
};

export default TopEmployers;
