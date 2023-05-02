import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { splitDate } from "../../util/Helper";

function DetailVideo() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [content, setContent] = useState([]);
  const [dateCreated, setDateCreated] = useState("");

  useEffect(() => {
    getVideosById(id);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const getVideosById = async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/video/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setDateCreated(splitDate(response.data.data.tanggalUpload));
    setVideos(response.data.data);
  };

  return (
    <div>
      <div>
        <div>
          <div className="mx:10 sm:mx-20 md:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
            {videos.judul}
          </div>
          <div className="flex items-center justify-center mx-2 sm:mx-[273px] my-3 font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a]">
            <div>{dateCreated}</div>
          </div>
          <div className="m-auto py-2 w-[100%] sm: flex flex-wrap justify-center">
            {/* <img src={videos.img} alt="" className="w-[90%] sm:w-[55%]" /> */}
            <iframe
              width="55%"
              height="390"
              src={`https://www.youtube.com/embed/${videos.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* {content.map((item, index) => ( */}
        <div className="mx-[10px]">
          <p className="text-sm text-justify mt-4 my-10 mx-16">
            {videos.deskripsi}
          </p>
        </div>
        {/* ))} */}
      </div>
      <div>{/* <Comment /> */}</div>
    </div>
  );
}

export default DetailVideo;
