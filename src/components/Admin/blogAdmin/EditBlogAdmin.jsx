import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../Sidebar';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogAdmin = () => {
  const [activePage, setActivePage] = useState('Blog');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem('token');

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log('content', content);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('author', author);
    data.append('content', content);

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/blog/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      // Navigasi ke halaman detail blog setelah berhasil update
      navigate(`/admin/blog`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data blog yang akan diupdate
    const fetchBlog = async () => {
      console.log('fetch blog running');
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/blog/${id}`
        );
        const blogData = response.data.data;
        setTitle(blogData.title);
        setDescription(blogData.description);
        setAuthor(blogData.author);
        setContent(blogData.content);
        console.log(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleContentChange = (value) => {
    // Mengubah URL gambar dalam konten menjadi URL lengkap dari server
    const updatedContent = value.replace(
      /src="(\/images\/[a-zA-Z0-9_]+\.[a-zA-Z]{3,4})"/g,
      `src="${process.env.REACT_APP_BASE_URL}$1"`
    );

    setContent(updatedContent);
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Edit Blog</h1>
          <p className="my-3 text-textFunc">Dashboard / Blog / Edit</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full">
                <form onSubmit={handleUpdate} className="space-y-4">
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
                      <td className="">
                        <input
                          type="text"
                          id="description"
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
                    <tr></tr>
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
                          onChange={handleContentChange}
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

export default EditBlogAdmin;
