import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ListFaqAdmin() {
  const [activePage, setActivePage] = useState("Feedback");
  const [faqs, setFaqs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/faq`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      setFaqs(response.data.faq);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(faqs);

  const deleteFaq = async (_id) => {
    console.log(_id);
    try {
      const config = {
        method: "delete",
        url: `${process.env.REACT_APP_BASE_URL}/faq/${_id}`,
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
          setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq._id !== _id));
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
          <h1 className="text-sizeTri text-textSec font-bold">Feedback</h1>
          <p className="my-3 text-textFunc">Dashboard / Feedback </p>
        </div>
        {/* judul */}
        {/* content */}

        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="flex items-center justify-between px-5 pt-5">
            <div>
              <Link
                id="addBlog"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 "
                type="button"
                to={"/faq"}
              >
                Tambah
              </Link>
            </div>
          </div>
          <div className="">
            <div className="relative overflow-x-auto p-5">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className=" text-textOpt  bg-bgFunc3 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nomor Telepon
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pesan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((faq, index) => (
                    <tr key={faq._id} className="bg-white border-b ">
                      <td scope="row" className="px-6 py-4 text-center whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{faq.nama}</td>
                      <td className="px-6 py-4 text-center"> {faq.no}</td>
                      <td className="px-6 py-4 text-center"> {faq.pesan}</td>
                      <td className="px-6 py-4 flex gap-3 ">
                        <Link className="hover:text-bgFunc3" to={`/admin/faq/${faq._id}/detail`}>
                          {" "}
                          Detail
                        </Link>
                        <Link className="hover:text-bgFunc3" to={`/admin/faq/${faq._id}/edit`}>
                          {" "}
                          Edit
                        </Link>
                        <button onClick={() => deleteFaq(faq._id)}>Delete</button>
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

export default ListFaqAdmin;
