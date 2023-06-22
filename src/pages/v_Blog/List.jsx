import React from 'react'
import ListBlogComponent from '../../components/Blog/ListBlogComponent'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ListBlog() {
  return (
    <div>
      <Header />
      <ListBlogComponent />
      <Footer />
    </div>
  );
}

export default ListBlog;