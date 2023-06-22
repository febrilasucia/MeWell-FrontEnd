import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { splitDate } from '../../../util/Helper';

function DetailBlogPage() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [dateCreated, setDateCreated] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getBlogsById(id);
    // getContent(id);
    setisLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const getBlogsById = async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/blog/${id}`
    );
    setDateCreated(splitDate(response.data.data.dateCreated));
    setBlogs(response.data.data);
    setName(response.data.data.createdBy.name);
  };

  console.log(blogs);
  return (
    <div>
      <div className="mx-20 sm:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
        {blogs.title}
      </div>
      <div>
        <div className="font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a] text-center mt-2">
          {dateCreated}
        </div>
        <div className="font-serif px-5 mb-3 italic text-center text-sm sm:text-lg">
          {name}
        </div>
        <div className="m-auto w-[80%] sm: flex flex-wrap justify-center">
          <img src={blogs.image} alt="" />
        </div>
      </div>
      {/* {content.map((item, index) => ( */}
      <div className="mt-8 mx-[50px]">
        <h3 className="text-xl font-semibold text-textSecondary my-10 mx-16">
          {blogs.subTitle}
        </h3>
        <p className="text-sm text-justify mt-4 my-10 mx-16">
          {blogs.description}
        </p>
      </div>
    </div>
  );
}

export default DetailBlogPage;
