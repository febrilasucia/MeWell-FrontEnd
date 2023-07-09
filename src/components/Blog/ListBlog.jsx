import React, { useEffect, useState } from "react";
import HeaderBlog from "../../image/list-blog.png";
import HeaderBlog2 from "../../image/list-blog2.png";
import ListBlog1 from "../../image2/26.png";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";

function ListBlog() {
  const navigate = useNavigate();
  const [searching, setSearching] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  // const searchBlog = (e) => {
  //   e.preventDefault();
  //   axios(`${import.meta.env.VITE_BASE_URL}/blog?title=${searching}`).then(
  //     (res) => {
  //       setBlogs(res.data);
  //     }
  //   );
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog`
      );
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="bg-bgSec">
      {/* Header List Blog */}
      <div className="absolute w-[300px] md:w-[700px] text-white mt-[150px] mx-[30px] md:mx-[200px] md:mt-[200px]">
        <span className="text-sizeSec font-bold">BlogTime</span>
        <p className="text-[16px] mt-3">
          Ayo cari bacaan sesuai dengan perasaan kamu hari ini
        </p>
        <p className="text-[16px]">
          Masalah, solusi dan tips dan trik untuk masalah hati kamu.
        </p>
      </div>

      {/* Search List Blog */}
      <div className="">
        <div className="absolute flex justify-center mt-[450px] md:mt-[500px] w-full ">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <form className="flex" type="submit">
                {/* <form className="flex" type="submit" onSubmit={searchBlog}> */}
                <div className="relative flex-auto min-w-0 w-[350px] sm:w-[600px] lg:w-[800px]">
                  <input
                    className="form-control absolute inset-0 block w-full h-full py-4 px-3 pr-8 text-xs sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-200 rounded-xl md:rounded-3xl transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-bgPrimary focus:outline-none"
                    type="text"
                    placeholder="Cari disini..."
                    name="search"
                    aria-label="Search"
                    value={searching}
                    onChange={(e) => setSearching(e.target.value)}
                  />
                  <div className="absolute inset-y-[17px] right-1 flex items-center pr-2 pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Search List Blog */}

      <div>
        <img
          className="w-full h-auto md:hidden"
          src={HeaderBlog}
          alt="Header for small screens"
        />
        <img
          className="w-full h-auto hidden md:block"
          src={HeaderBlog2}
          alt="Header for medium and large screens"
        />
      </div>

      {/* Header List Blog */}

      {/* Card List Blog */}
      <div className="flex flex-wrap justify-center my-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm m-5 bg-white hover:border shadow-sm hover:border-gray-200 rounded-lg cursor-pointer"
            onClick={() => handleClick(blog._id)}
          >
            <img className="rounded-t-lg" src={ListBlog1} alt="" />
            <div className="rounded p-6">
              <h1 className="text-xl font-bold text-textSec">{blog.title}</h1>
              <p className="text-gray-500 text-sizeParagraph"></p>
              <p className="text-gray-500 text-sizeParagraph">
                {dayjs(blog.UpdatedAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY")}
              </p>
              <div className="text-sizeParagraph text-textFunc">
                {blog.description}
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-sizeParagraph"></p>
                <p className="text-gray-500 text-sizeParagraph">
                  {blog.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBlog;
