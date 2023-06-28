import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

const ListBlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [activePage, setActivePage] = useState('List-Blog');

  useEffect(() => {
    // Fetch the list of blogs from the server
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get(
        //   `${import.meta.env.VITE_BASE_URL}/blogs`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('token')}`,
        //     },
        //   }
        // );

        // Set the fetched blogs data to the state
        // setBlogs(response.data);

        // For demonstration purposes, let's use dummy data
        const dummyBlogs = [
          { id: 1, title: 'Blog 1', author: 'Author 1', content: 'Content 1' },
          { id: 2, title: 'Blog 2', author: 'Author 2', content: 'Content 2' },
          { id: 3, title: 'Blog 3', author: 'Author 3', content: 'Content 3' },
        ];
        setBlogs(dummyBlogs);
      } catch (error) {
        // Handle any errors
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="h-screen flex-1 mx-auto p-7">
          <h2 className="text-2xl font-bold mb-4">Blog List</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-4 mb-4">
              <h3 className="text-lg font-medium">{blog.title}</h3>
              <p className="text-sm text-gray-500">Author: {blog.author}</p>
              <div className="mt-2">{blog.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListBlogAdmin;
