import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../Sidebar';

const CreateBlogAdmin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [activePage, setActivePage] = useState('Blog');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      author,
      content,
    };

    console.log(title, author, content);

    try {
      // Send a POST request to the server to save the new blog
      // const response = await axios.post(
      //   `${import.meta.env.VITE_BASE_URL}/blog`,
      //   newBlog,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     },
      //   }
      // );

      // Handle the response or perform any additional actions

      // Clear the form
      setTitle('');
      setAuthor('');
      setContent('');

      // Log the data to the console
    } catch (error) {
      // Handle any errors and display an error message
    }
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="h-screen flex-1">
        <div className="max-w-3xl mx-auto mt-3 mb-3">
          <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium mb-1">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="author" className="block font-medium mb-1">
                Author:
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="content" className="block font-medium mb-1">
                Content:
              </label>
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'image'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block'],
                    [{ align: [] }],
                    [{ indent: '-1' }, { indent: '+1' }],
                    [{ direction: 'rtl' }],
                    ['clean'],
                  ],
                }}
                formats={[
                  'header',
                  'bold',
                  'italic',
                  'underline',
                  'strike',
                  'link',
                  'image',
                  'list',
                  'bullet',
                  'blockquote',
                  'code-block',
                  'align',
                  'indent',
                  'direction',
                ]}
                className="border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogAdmin;
