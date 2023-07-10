import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';

const CreateBlogAdmin = () => {
  const [activePage, setActivePage] = useState('Blog');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(title);
  console.log(description);
  console.log(author);
  console.log(content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('author', author);
    data.append('content', content);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/blog`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();

    navigate('/admin/blog')
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Tambah Blog</h1>
          <p className="my-3 text-textFunc">Dashboard / Blog / Tambah</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full ">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <table className="w-full">
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Judul Blog
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
                          className="block text-textSec mb-1"
                        >
                          Deskripsi Singkat
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="description"
                          placeholder="max 50 words"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
                          className="block text-textSec mb-1"
                        >
                          Author
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="author"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="content"
                          className="block text-textSec mb-1"
                        >
                          Konten
                        </label>
                      </td>
                      <td className="py-3">
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
                      </td>
                    </tr>
                  </table>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      position: 'relative',
                    }}
                    className="p-5 flex flex-wrap gap-2"
                  >
                    <button
                      type="button"
                      className="w-[100px] px-4 py-2 bg-bgFunc text-white rounded-md hover:bg-bgFunc3 focus:outline-none focus:ring focus:ring-gray-300"
                      onClick={handleGoBack}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="w-[100px] px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default CreateBlogAdmin;
