import React, { useEffect, useState } from 'react';
import HeaderBlog from '../../image/list-blog.png';
import HeaderBlog2 from '../../image/list-blog2.png';
import ListBlog1 from '../../image2/26.png';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Tips Mengelola Stres',
    author: 'John Doe',
    date: '2022-10-15',
    content:
      '<h1>Tips Mengelola Stres</h1><p>Oleh: John Doe</p><p>Tanggal: 2022-10-15</p><p>Ini adalah konten mengenai tips mengelola stres. <strong>Jaga pola tidur yang baik</strong>, <em>lakukan olahraga secara teratur</em>, dan <u>hindari stres berlebihan</u>. Selalu ingat untuk mengatur waktu istirahat dan relaksasi secara rutin.</p>',
  },
  {
    id: 2,
    title: 'Strategi Mengatasi Kecemasan Sosial',
    author: 'Jane Smith',
    date: '2022-11-03',
    content:
      '<h1>Strategi Mengatasi Kecemasan Sosial</h1><p>Oleh: Jane Smith</p><p>Tanggal: 2022-11-03</p><p>Ini adalah konten mengenai strategi mengatasi kecemasan sosial. <strong>Berlatih bernapas dalam-dalam</strong> dan <em>terlibat dalam aktivitas sosial secara bertahap</em> dapat membantu mengurangi kecemasan sosial. Jangan ragu untuk mencari dukungan dari orang terdekat atau profesional jika diperlukan.</p>',
  },
  {
    id: 3,
    title: 'Cara Meningkatkan Kesehatan Mental',
    author: 'David Johnson',
    date: '2022-12-20',
    content:
      '<h1>Cara Meningkatkan Kesehatan Mental</h1><p>Oleh: David Johnson</p><p>Tanggal: 2022-12-20</p><p>Ini adalah konten mengenai cara meningkatkan kesehatan mental. <strong>Terlibat dalam aktivitas fisik secara teratur</strong>, <em>tingkatkan interaksi sosial yang positif</em>, dan <u>luangkan waktu untuk hobi dan relaksasi</u> dapat membantu menjaga kesehatan mental dengan baik.</p>',
  },
];

function ListBlog() {
  const navigate = useNavigate();
  const [searching, setSearching] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // const [blogs, setBlogs] = useState([]);
  // const searchBlog = (e) => {
  //   e.preventDefault();
  //   axios(`${import.meta.env.VITE_BASE_URL}/blog?title=${searching}`).then(
  //     (res) => {
  //       setBlogs(res.data);
  //     }
  //   );
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs();
  }, []);
  const getBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    // setBlogs(response.data);
    setIsLoading(false);
  };

  const handleClick = ({ id }) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="bg-bgSec">
      {/* Header List Blog */}
      <div className="absolute w-[300px] md:w-[700px] text-white mt-[150px] mx-[30px] md:mx-[200px] md:mt-[200px]">
        <span className="text-sizeSec font-bold">BlogTime</span>
        <p className="text-[16px] mt-3">
          Ayo cari bacaan sesuai dengan perasaan kamu hari ini
        </p>
        <p className="text-[16px]">
          Masalah, solusi dan tips dan trik untuk masalah hati kamu.
        </p>
      </div>

      {/* Search List Blog */}
      <div className="">
        <div className="absolute flex justify-center mt-[450px] md:mt-[500px] w-full ">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <form className="flex" type="submit">
                {/* <form className="flex" type="submit" onSubmit={searchBlog}> */}
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
      {/* Search List Blog */}

      <div>
        <img
          className="w-full h-auto md:hidden"
          src={HeaderBlog}
          alt="Header for small screens"
        />
        <img
          className="w-full h-auto hidden md:block"
          src={HeaderBlog2}
          alt="Header for medium and large screens"
        />
      </div>

      {/* Header List Blog */}

      {/* Card List Blog */}
      <div className="flex flex-wrap justify-center my-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow cursor-pointer"
            onClick={() => handleClick(blog.id)}
          >
            <img className="rounded-t-lg" src={ListBlog1} alt="" />
            <div className="bg-white rounded shadow p-6">
              <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
              <p className="text-gray-500 mb-2">By {blog.author}</p>
              <p className="text-gray-500 mb-4">{blog.date}</p>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: blog.content.replace(/(<([^>]+)>)/gi, '').substring(0, 5) + '...' }}
                style={{ WebkitLineClamp: 5 }}
              ></div>
              <button className="absolute bottom-0 left-0 p-2 text-sm text-white bg-blue-500 rounded-bl">
                Read More
              </button>
            </div>
          </div>
        ))}
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
  );
}

export default ListBlog;
