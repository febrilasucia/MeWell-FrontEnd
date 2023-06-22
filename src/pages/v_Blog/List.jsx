import React, { useEffect } from 'react'
import ListBlogComponent from '../../components/Blog/ListBlogComponent'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ListBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <ListBlogComponent />
      <Footer />
    </div>
  );
}

export default ListBlog;