import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { splitDate } from '../../util/Helper';

function DetailBlogPage() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [blog, setBlog] = useState([]);
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
      `${process.env.REACT_APP_BASE_URL}/blog/${id}`
    );
    setBlog(response.data.data);
    setName(response.data.data.createdBy.name)
    setDateCreated(splitDate(response.data.data.updatedAt))
  };

  const replaceImageSrc = (content) => {
    if (!content) {
      return '';
    }
    
    const regex = /<img[^>]+src="([^">]+)"/g;
    const replacedContent = content.replace(regex, (match, src) => {
      if (src.startsWith('/images')) {
        return match.replace(src, `${process.env.REACT_APP_BASE_URL}${src}`);
      }
      return match;
    });
    return replacedContent;
  };

  const replacedContent = replaceImageSrc(blog.content);



  console.log(blog);
  return (
    <div className="container mx-auto py-8">
    <Link to="/" className="text-2xl font-bold text-gray-500 mb-4">&lt; Back</Link>
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-2">Author: {blog.author}</p>
      <p className="text-gray-600 mb-4">
        Updated at: {new Date(blog.updatedAt).toLocaleString()}
      </p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: replacedContent }}
      />
      <style>
          {`
            .prose img {
              display: block;
              margin: 0 auto;
            }
          `}
        </style>
    </div>
  </div>
    // <div>
    //   <div className="mx-20 sm:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
    //     {blogs.title}
    //   </div>
    //   <div>
    //     <div className="font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a] text-center mt-2">
    //       {dateCreated}
    //     </div>
    //     <div className="font-serif px-5 mb-3 italic text-center text-sm sm:text-lg">
    //       {name}
    //     </div>
    //     <div className="m-auto w-[80%] sm: flex flex-wrap justify-center">
    //       <img src={blogs.image} alt="" />
    //     </div>
    //   </div>
    //   {/* {content.map((item, index) => ( */}
    //   <div className="mt-8 mx-[50px]">
    //     <h3 className="text-xl font-semibold text-textSecondary my-10 mx-16">
    //       {blogs.subTitle}
    //     </h3>
    //     <p className="text-sm text-justify mt-4 my-10 mx-16">
    //       {blogs.content}
    //     </p>
    //   </div>
    // </div>
  );
}

export default DetailBlogPage;
