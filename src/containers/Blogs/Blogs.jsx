import React from 'react';
import Container from '../Container';
import CardBlog from '@/components/CardBlog';

const Blogs = () => {
  return (
    <section id="blogs-container" className="mb-16">
      <Container>
        <h1 className="heading-1">Blog</h1>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <CardBlog imgUrl="https://i.pinimg.com/736x/80/27/c6/8027c6c615900bf009b322294b61fcb2.jpg" />
          <CardBlog imgUrl="https://i.pinimg.com/736x/a1/27/73/a1277303ec49ee936b2ba11bb3a98a18.jpg" />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
