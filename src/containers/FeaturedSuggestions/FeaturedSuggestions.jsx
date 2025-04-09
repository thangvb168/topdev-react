import React from 'react';
import Container from '../Container';
import Button from '@/components/Button';
import CardJob from '@/components/CardJob';

const FeaturedSuggestions = () => {
  return (
    <section id="featured-suggestions-container" className="mb-16">
      <Container>
        <div className="mb-8">
          <h1>Gợi ý nổi bật</h1>
          <div className="flex gap-2">
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardJob />
          <CardJob />
          <CardJob />
          <CardJob />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSuggestions;
