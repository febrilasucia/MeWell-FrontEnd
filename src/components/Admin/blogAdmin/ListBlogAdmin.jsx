import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListBlogAdmin() {
  const [activePage, setActivePage] = useState('Blog');
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlogs = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BASE_URL}/blog`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(config);
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(blogs);

  const deleteBlog = async (_id) => {
    console.log(_id);
    try {
      const config = {
        method: 'delete',
        url: `${process.env.REACT_APP_BASE_URL}/blog/${_id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.request(config);
      // Setelah berhasil menghapus blog, perbarui state blogs
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Content */}
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Blog</h1>
          <p className="my-3 text-textFunc">Dashboard / Blog</p>
        </div>
        {/* judul */}
        {/* content */}

        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="flex items-center justify-between px-5 pt-5">
            <div>
              <Link
                id="addBlog"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                to={'/admin/blog/create-blog'}
              >
                Tambah
              </Link>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search items"
              />
            </div>
          </div>
          <div className="">
            <div className="relative overflow-x-auto p-5">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-textOpt  bg-bgFunc3 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Judul Blog
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deskripsi Singkat
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, index) => (
                    <tr
                      key={blog._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{blog.title}</td>
                      <td className="px-6 py-4">{blog.description}</td>
                      <td className="px-6 py-4 flex gap-3">
                        <Link to={`/admin/blog/${blog._id}/edit`}>Edit</Link>
                        <button onClick={() => deleteBlog(blog._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* content */}
      </div>

      {/* Content */}
    </div>
  );
}

export default ListBlogAdmin;
