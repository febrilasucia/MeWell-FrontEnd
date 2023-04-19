import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import HeaderVideo from '../../image/list-video.png'
import HeaderVideo2 from '../../image/list-video2.png'
import ListVideo1 from "../../image2/27.png";

function ListVideo() {
  const [searching, setSearching] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setVideos] = useState([]);
  const searchVideo = (e) => {
    e.preventDefault();
    axios(`${import.meta.env.VITE_BASE_URL}/blog?title=${searching}`).then(
      (res) => {
        setVideos(res.data);
      }
    );
  };
  return (
    <div className="bg-bgSec">
      {/* Header List Video */}
      <div className="absolute w-[300px] md:w-[700px] text-white mt-[150px] mx-[30px] md:mx-[200px] md:mt-[200px]">
        <span className="text-sizeSec font-bold">VideoTime</span>
        <p className="text-[16px] mt-3">
          Ayo cari tontonan menarik sesuai dengan perasaan kamu hari ini
        </p>
        <p className="text-[16px]">
          Masalah, solusi dan tips dan trik untuk masalah hati kamu.
        </p>
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
        <img
          className="w-full h-auto md:hidden"
          src={HeaderVideo}
          alt="Header for small screens"
        />
        <img
          className="w-full h-auto hidden md:block"
          src={HeaderVideo2}
          alt="Header for medium and large screens"
        />
      </div>

      {/* Card List Video */}
      <div className="flex flex-wrap justify-center mt-10">
        <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={ListVideo1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-sizePri font-bold text-textSec">Judul</h5>
            </a>
            <p class="mb-3  text-textFunc">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={ListVideo1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-sizePri font-bold text-textSec">Judul</h5>
            </a>
            <p class="mb-3  text-textFunc">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={ListVideo1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-sizePri font-bold text-textSec">Judul</h5>
            </a>
            <p class="mb-3  text-textFunc">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={ListVideo1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-sizePri font-bold text-textSec">Judul</h5>
            </a>
            <p class="mb-3  text-textFunc">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
      {/* Card List Video */}
    </div>
  );
}

export default ListVideo;
