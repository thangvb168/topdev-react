import React, { useEffect, useState } from 'react';
import Container from '../Container';
import CardBlog from '@/components/CardBlog';
import Slider from '@/components/Slider';
import request from '@/utils/request';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    centerPadding: '10px',
  };

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

        <Slider style="special" settings={settings}>
          {loading ? (
            <div className="flex gap-4">
              <CardBlog loading={loading} />
              <CardBlog loading={loading} />
              <CardBlog loading={loading} />
            </div>
          ) : (
            blogs.map(blog => (
              <CardBlog
                key={blog.id}
                imgUrl={blog.imgUrl}
                title={blog.title}
                description={blog.description}
                field={blog.field}
                createdAt={blog.createdAt}
              />
            ))
          )}
        </Slider>
      </Container>
    </section>
  );
};

export default Blogs;
