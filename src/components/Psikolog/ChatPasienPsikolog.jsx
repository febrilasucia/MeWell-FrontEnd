import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarPsikolog";
import { FaUserCircle } from "react-icons/fa";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { formatTime } from "../../util/Helper";
import axios from "axios";
const socket = io.connect("http://localhost:5000");

const ChatPasienPasikolog = () => {
  const [activePage, setActivePage] = useState("Chat Pasien");
  const [message, setMessage] = useState([]);
  const [send, setSend] = useState("");
  const params = useParams();
  const userId = localStorage.getItem("user_id");
  const konsulId = params.id;
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");

  const fetchUsers = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/konsul/${konsulId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      setUser(response.data.data);
      console.log("ini respons", response);
      console.log("ini json data", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers(); //ambil data user
    socket.on("receive_message", (data) => {
      // console.log(data);
      setMessage((prev) => {
        return [
          ...prev,
          { message: data.message, sender: data.sender, konsulId: data.konsulId, timestamp: data.timestamp },
        ];
      });
    });
    socket.emit("join_room", { konsulId });
    socket.emit("previous_chat", { konsulId });
    socket.on("get_previous_chat", (data) => {
      setMessage(data);
    });
    return () => {
      socket.off("reply_function");
    };
  }, []);

  useEffect(() => {
    console.log("ini message", message);
    console.log("ini konsul", konsulId);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("send_message_to", { message: send, sender: userId, konsulId: konsulId, timestamp: new Date() });
    setSend("");
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Content */}
      <div className="h-screen w-11/12 mx-auto pt-5">
        <div className="flex justify-center items-center">
          <div className="w-11/12">
            <div className="bg-bgFunc3 flex items-center gap-3 text-white font-bold py-2 pl-8 rounded-xl">
              <FaUserCircle className="text-xl" />
              {/* <span className="font-normal  text-lg ">Dr. Username, A.Md.Kom</span> */}
              <span className="font-normal  text-lg ">{user?.user_id?.name}</span>
            </div>
            <div className="bg-bgTri h-[80vh] overflow-scroll">
              {message.map((data, i) => {
                if (data.sender === userId) {
                  return (
                    <div className="flex justify-end" key={i}>
                      <div className="bg-textFunc text-white rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 after:h-0 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-b-textFunc after:border-[10px] after:absolute after:right-[-10px] after:bottom-0">
                        <p className="text-[14px]">{data.message}</p>
                        <small className="block mt-2 text-left text-xxs">{formatTime(data.timestamp)}</small>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="flex justify-start" key={i}>
                    <div className="bg-bgOpt text-white rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 before:h-0 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:border-b-bgOpt before:border-[10px] before:absolute before:left-[-10px] before:bottom-0">
                      <p className="text-[14px]">{data.message}</p>
                      <small className="block mt-2 text-right text-xxs">{formatTime(data.timestamp)}</small>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="bg-bgTri h-[80vh] overflow-scroll">
              
              <div className="flex justify-end">
                <div className="bg-textFunc text-white rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 after:h-0 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-b-textFunc after:border-[10px] after:absolute after:right-[-10px] after:bottom-0">
                  <p className="text-[14px]">Hallo Selamat siang1</p>
                  <small className="block mt-2 text-left text-xxs">10:32</small>
                </div>
              </div>
            </div> */}
            <div className="bg-bgFunc3 text-white font-bold py-1 rounded-xl text-[14px]">
              <form
                className="flex mx-2"
                onSubmit={(e) => {
                  handleSend(e);
                }}
              >
                <input
                  type="text"
                  value={send}
                  onChange={(e) => {
                    setSend(e.target.value);
                  }}
                  placeholder="Typing Here..."
                  className="rounded text-black bg-bgSec font-normal grow focus:outline-none mr-2 p-2"
                />
                <button type="submit">
                  <svg
                    style={{ fill: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="36px"
                    viewBox="0 0 24 24"
                    width="36px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
      {/* Content */}
    </div>
  );
};

export default ChatPasienPasikolog;
