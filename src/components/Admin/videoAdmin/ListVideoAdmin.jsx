import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ListVideoAdmin() {
  const [activePage, setActivePage] = useState("Video");
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/video/`,
    };

    try {
      const response = await axios.request(config);
      setVideos(response.data.video);
      console.log(response);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("ini data video",videos);

  const deleteVideo = async (_id) => {
    console.log(_id);
    try {
      const config = {
        method: "delete",
        url: `${process.env.REACT_APP_BASE_URL}/video/${_id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.request(config);
          setVideos((prevVideos) =>
            prevVideos.filter((video) => video._id !== _id)
          );
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your file is safe :)", "error");
        }
      });
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
          <h1 className="text-sizeTri text-textSec font-bold">Video</h1>
          <p className="my-3 text-textFunc">Dashboard / Video</p>
        </div>
        {/* judul */}
        {/* content */}

        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="flex items-center justify-between px-5 pt-5">
            <div>
              <Link
                id="addVideo"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 "
                type="button"
                to={"/admin/video/create-video"}
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
                  className="w-5 h-5 text-gray-500 "
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
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
                      Judul Video
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
                  {videos.map((video, index) => (
                    <tr key={video._id} className="bg-white border-b ">
                      <th scope="row" className="px-6 py-4 text-center">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{video.title}</td>
                      <td className="px-6 py-4">{video.description}</td>
                      <td className="px-6 py-4 flex gap-3">
                        <Link to={`/admin/video/${video._id}/edit`}>Edit </Link>
                        <button onClick={() => deleteVideo(video._id)}>
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

export default ListVideoAdmin;
