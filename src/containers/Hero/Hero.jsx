import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';

const Hero = () => {
  return (
    <section id="hero-container" className="mb-16">
      <Container>
        <div className="text-center">
          <div>Banner</div>
          <div className="flex flex-wrap items-center justify-center gap-x-[10px]">
            <div className="w-full md:w-5/12">Input Search</div>
            <div className="flex w-full items-center justify-center gap-x-[10px] md:w-1/4">
              <div>Input Select</div>
              <Button />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
