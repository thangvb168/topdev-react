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

        {loading ? (
          <Slider>
            <CardJobSkeleton />
            <CardJobSkeleton />
            <CardJobSkeleton />
          </Slider>
        ) : (
          <>
            <Slider
              className="hidden md:block"
              slidesToShow={3}
              variant="customDotsWithArrow"
              variableWidth={false}
            >
              {blogs.map(blog => (
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
            <Slider
              className="block md:hidden"
              slidesToShow={1}
              variant="customDotsWithArrow"
              variableWidth={false}
            >
              {blogs.map(blog => (
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
          </>
        )}
      </Container>
    </section>
  );
};

export default Blogs;
