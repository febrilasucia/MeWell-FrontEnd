import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      author,
      content,
    };      console.log(content);


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
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
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
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
