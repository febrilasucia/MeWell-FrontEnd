import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { splitDate } from "../../util/Helper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import "dayjs/locale/id";

function DetailBlogPage() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [dateCreated, setDateCreated] = useState("");
  const [name, setName] = useState("");

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
    setName(response.data.data.createdBy.name);
    setDateCreated(splitDate(response.data.data.updatedAt));
  };

  const replaceImageSrc = (content) => {
    if (!content) {
      return "";
    }

    const regex = /<img[^>]+src="([^">]+)"/g;
    const replacedContent = content.replace(regex, (match, src) => {
      if (src.startsWith("/images")) {
        return match.replace(src, `${process.env.REACT_APP_BASE_URL}${src}`);
      }
      return match;
    });
    return replacedContent;
  };

  const replacedContent = replaceImageSrc(blog.content);

  console.log(blog);
  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <div className="max-w-3xl mx-auto py-6">
          <h1 className=" text-2xl sm:text-4xl font-bold text-textSec text-center">
            {blog.title}
          </h1>
            <p className="font-semibold text-lg text-[#71717a] text-center">
              Author: {blog.author}
            </p>
            <p className="justify font-semibold text-lg text-[#71717a] text-center">
              Updated at:{" "}
              {dayjs(blog.UpdatedAt).locale("id").format("dddd, DD MMMM YYYY")}
            </p>

          <div
            className="text-sizeParagraph text-textSec mt-5"
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
        <Link to="/" className=" text-white my-4">
          <div className="w-100 h-50 bg-bgOpt2 hover:bg-bgOpt cursor-pointer border border-1 rounded-2xl m-5 text-center p-2">
            Selesai
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default DetailBlogPage;
