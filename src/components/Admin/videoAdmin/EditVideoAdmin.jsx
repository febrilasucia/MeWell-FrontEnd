import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditVideoAdmin = () => {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [activePage, setActivePage] = useState("Video");
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("videoLink", videoLink);
    data.append("description", description);
    data.append("author", author);
    data.append("content", content);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/video/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));

      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate(`/admin/video`);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchVideo = async () => {
      console.log("fetch is running");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/video/${id}`
        );
        const videoData = response.data.data;
        setTitle(videoData.title);
        setVideoLink(videoData.videoLink);
        setDescription(videoData.description);
        setAuthor(videoData.author);
        setContent(videoData.content);
        console.log(videoData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, [id]);

  const handleContentChange = (value) => {
    const updatedContent = value.replace(
      /src="(\/images\/[a-zA-Z0-9_]+\.[a-zA-Z]{3,4})"/g,
      `src="${process.env.REACT_APP_BASE_URL}$1"`
    );

    setContent(updatedContent);
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Edit Video</h1>
          <p className="my-3 text-textFunc">Dashboard / Video / Edit</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full ">
                <form onSubmit={handleUpdate} className="space-y-4">
                  <table className="w-full">
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Judul Video
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="author"
                          className="block text-textSec mb-1"
                        >
                          Author
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="author"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="videoLink"
                          className="block text-textSec mb-1"
                        >
                          Link Video
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="videoLink"
                          value={videoLink}
                          onChange={(e) => setVideoLink(e.target.value)}
                          className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
                          className="block text-textSec mb-1"
                        >
                          Deskripsi Singkat
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="content"
                          className="block text-textSec mb-1"
                        >
                          Konten
                        </label>
                      </td>
                      <td className="py-3">
                        <ReactQuill
                          value={content}
                          onChange={handleContentChange}
                          modules={{
                            toolbar: [
                              [{ header: [1, 2, false] }],
                              ["bold", "italic", "underline", "strike"],
                              ["link", "image"],
                              [{ list: "ordered" }, { list: "bullet" }],
                              ["blockquote", "code-block"],
                              [{ align: [] }],
                              [{ indent: "-1" }, { indent: "+1" }],
                              [{ direction: "rtl" }],
                              ["clean"],
                            ],
                          }}
                          formats={[
                            "header",
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "link",
                            "image",
                            "list",
                            "bullet",
                            "blockquote",
                            "code-block",
                            "align",
                            "indent",
                            "direction",
                          ]}
                          className="h-[150px] border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </table>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "relative",
                    }}
                    className="p-5 flex flex-wrap gap-2"
                  >
                    <button
                      onClick={handleGoBack}
                      type="button"
                      className="w-[100px] px-4 py-2 mt-2 bg-bgFunc text-white rounded-md hover:bg-bgFunc3 focus:outline-none focus:ring focus:ring-gray-300"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="w-[100px] px-4 py-2 mt-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default EditVideoAdmin;
