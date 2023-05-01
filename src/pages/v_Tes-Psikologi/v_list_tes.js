import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderTes from "../../image/list-psikologi-test.png";
import HeaderTes2 from "../../image/list-psikologi-test2.png";
import ListBlog1 from "../../image2/26.png";

function ListTes() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs();
  }, []);
  const getBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setBlogs(response.data);
    setIsLoading(false);
  };
  return (
    <div>
      <div className="bg-bgSec">
        {/* Header List Blog */}
        <div className="absolute w-[450px] text-right md:w-[1200px] text-white mt-[200px] mx-[30px] md:mt-[200px]">
          <span className="text-sizeSec font-bold">Tes Psikologi</span>
          <p className="text-[14px] md:text-[16px] mt-3 md:ml-[600px] ml-[100px]">
            Sebuah tes survei untuk mengetahui diri lebih dalam sebagai patokan
            dan dapat di gunakan untuk semua kalangan umur
          </p>
        </div>

        <div>
          <img
            className="w-full h-auto md:hidden"
            src={HeaderTes}
            alt="Header for small screens"
          />
          <img
            className="w-full h-auto hidden md:block"
            src={HeaderTes2}
            alt="Header for medium and large screens"
          />
        </div>

        {/* Header List Blog */}

        {/* Card List Blog */}
        <div className="flex flex-wrap justify-center my-10">
          <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img class="rounded-t-lg" src={ListBlog1} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-sizePri font-bold text-textSec">Judul</h5>
              </a>
              <p class="mb-3 text-textFunc">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
                
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <img
            src={Loading}
            alt="isLoading"
            className="h-40 sm:h-60 mx-auto "
          />
        ) : !blogs || blogs == "" ? (
          <div className="flex justify-center font-mono font-semibold text-[#295454]">
            <img src={Empty} alt="isLoading" className="h-60 sm:h-80 mx-auto" />
          </div>
        ) : (
          blogs.map((item, index) => (
            <div key={index} onClick={() => clickBlog(item)}>
              <div key={index} onClick={() => clickBlog(item)}>
                <Link to={`/blog/${item._id}`}>
                  <div className="w-full m-5 flex justify-center items-center">
                    <div className="w-80 bg-white rounded-lg transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-xl">
                      <img
                        className="h-50 object-fit: cover; rounded-t-xl "
                        src={item.image}
                        alt=""
                      />
                      <div className="p-2 mx-2">
                        <p className="text-[10px] md:text-[12px] font-semibold text-gray-500">
                          {splitDate(item.dateCreated)}
                        </p>
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold text-lg py-1 text-textPrimary">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-sm text-gray-600">{item.subTitle}</p>
                      </div>

                      <div className="flex justify-between m-3 ">
                        <div className="author flex justify-center items-center">
                          <img
                            className="w-[24px] rounded-full"
                            src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
                            alt="author"
                          />
                          <p className="text-gray-500 mx-1 font-semibold md:font-bold text-[8px] md:text-[12px]">
                            {item.createdBy.name}
                          </p>
                        </div>
                        <div className="relative flex items-center justify-center px-8 md:px-10 overflow-hidden font-semibold md:font-bold text-bgPrimary transition duration-300 ease-out border-2 border-bgPrimary rounded-full group">
                          <Link
                            to={`/blog/${item._id}`}
                            className="bg-bgPrimary absolute flex items-center justify-center w-full h-full duration-300 -translate-x-full text-white group-hover:translate-x-0 ease"
                          >
                            <BsFillArrowRightCircleFill />
                          </Link>

                          <Link
                            to={`/blog/${item._id}`}
                            className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-bgPrimary transition-all duration-300 transform group-hover:translate-x-full ease"
                          >
                            ReadMore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div> */}

        {/* Card List Blog */}
      </div>
    </div>
  );
}

export default ListTes;
