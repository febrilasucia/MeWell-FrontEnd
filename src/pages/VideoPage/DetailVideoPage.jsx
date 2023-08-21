import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { splitDate } from "../../util/Helper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import "dayjs/locale/id";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function DetailVideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [dateCreated, setDateCreated] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getVideosById(id);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const getVideosById = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/video/${id}`);

    setVideo(response.data.data);
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

  const replacedContent = replaceImageSrc(video.content);

  console.log(video);

  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <div className="max-w-3xl mx-auto py-6">
          <div className="flex items-center justify-center my-5">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoLink}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className=" text-2xl sm:text-4xl font-bold text-textSec text-center">{video.title}</h1>
          <p className="font-semibold text-lg text-[#71717a] text-center">Author: {video.author}</p>
          <p className="justify font-semibold text-lg text-[#71717a] text-center">
            Updated at: {dayjs(video.UpdatedAt).locale("id").format("dddd, DD MMMM YYYY")}
          </p>
          <ReactQuill value={replacedContent} readOnly={true} theme={"bubble"} />
          <style>
            {`
            .prose img {
              display: block;
              margin: 0 auto;
            }
          `}
          </style>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoBack}
            type="button"
            className="bg-bgOpt2 text-white my-4 w-full hover:bg-bgOpt cursor-pointer border border-1 rounded-2xl m-5 text-center p-2"
          >
            Selesai
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default DetailVideoPage;
