import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import HeaderVideo from "../../image/list-video.png";
import HeaderVideo2 from "../../image/list-video2.png";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";

function ListVideo() {
  const navigate = useNavigate();
  const [searching, setSearching] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/video`);
      setVideos(response.data.video);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(videos);

  const handleClick = (id) => {
    navigate(`/video/${id}`);
  };

  const searchVideo = (e) => {
    e.preventDefault();
    axios(`${import.meta.env.VITE_BASE_URL}/video?title=${searching}`).then((res) => {
      setVideos(res.data);
    });
  };
  return (
    <div className="bg-bgSec">
      {/* Header List Video */}
      <div className="absolute w-[300px] md:w-[700px] text-white mt-[150px] mx-[30px] md:mx-[200px] md:mt-[200px]">
        <span className="text-sizeSec font-bold">VideoTime</span>
        <p className="text-[16px] mt-3">Ayo cari tontonan menarik sesuai dengan perasaan kamu hari ini</p>
        <p className="text-[16px]">Masalah, solusi dan tips dan trik untuk masalah hati kamu.</p>
      </div>
      {/* Header List Video */}

      {/* Search List Video */}
      <div className="">
        <div className="absolute flex justify-center mt-[500px] md:mt-[500px] w-full ">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <form className="flex" type="submit" onSubmit={searchVideo}>
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
      {/* Search List Video */}

      <div>
        <img className="w-full h-auto md:hidden" src={HeaderVideo} alt="Header for small screens" />
        <img className="w-full h-auto hidden md:block" src={HeaderVideo2} alt="Header for medium and large screens" />
      </div>

      {/* Card List Video */}
      <div className="flex flex-wrap justify-center mt-10">
        {videos.map((video) => (
          <div
            key={video._id}
            onClick={() => handleClick(video._id)}
            className="max-w-sm m-5 bg-white hover:border shadow-sm hover:border-gray-200 rounded-lg cursor-pointer"
          >
            <iframe
              width="380"
              src={`https://www.youtube.com/embed/${video.videoLink}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="rounded p-6">
              <h1 className="text-xl font-bold text-textSec">{video.title}</h1>
              <p className="text-gray-500 text-sizeParagraph"></p>
              <p className="text-gray-500 text-sizeParagraph">
                {dayjs(video.UpdatedAt).locale("id").format("dddd, DD MMMM YYYY")}
              </p>
              <div className="max-w-xs text-sizeParagraph text-textFunc">
                <p className="truncate overflow-hidden">{video.description}</p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-sizeParagraph"></p>
                <p className="text-gray-500 text-sizeParagraph">{video.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Card List Video */}
    </div>
  );
}

export default ListVideo;
