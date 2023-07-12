import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateVideoAdmin = () => {
  const [activePage, setActivePage] = useState("Video");
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("videoLink", videoLink);
    data.append("description", description);
    data.append("author", author);
    data.append("content", content);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/video`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
    navigate("/admin/video");

    try {
      Swal.fire({
        title: "Berhasil!",
        text: "Data berhasil disimpan.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setTimeout(() => {
        navigate("/admin/video");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Tambah Video</h1>
          <p className="my-3 text-textFunc">Dashboard / Video / Tambah</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full ">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                          htmlFor="author"
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
                          className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
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
                          htmlFor="content"
                          className="block text-textSec mb-1"
                        >
                          Konten
                        </label>
                      </td>
                      <td className="py-3">
                        <ReactQuill
                          value={content}
                          onChange={setContent}
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

export default CreateVideoAdmin;
