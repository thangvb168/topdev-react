import React, { useEffect, useState } from 'react';
import Container from '../Container';
import CardBlog from '@/components/CardBlog';
import Slider from '@/components/Slider';
import request from '@/utils/request';
import { CardBlogSkeleton, CardJobSkeleton } from '@/components/Skeleton';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await request.get('/blogs');
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs-container" className="mb-16">
      <Container>
        <h1 className="heading-1 mb-8">Blog</h1>

        <Slider
          variant="customDotsWithArrow"
          slidesToShow={3}
          slidesToScroll={3}
          variableWidth={false}
          responsives={{
            md: {
              slidesToScroll: 1,
              variableWidth: false,
              slidesToShow: 1,
            },
          }}
        >
          {loading
            ? [1, 2, 3, 4, 5, 6].map(index => <CardBlogSkeleton key={index} />)
            : blogs.map(blog => (
                <CardBlog
                  key={blog.id}
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  description={blog.description}
                  field={blog.field}
                  createdAt={blog.createdAt}
                />
              ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Blogs;
