import React from 'react';
import ListVideoComponent from '../../components/Video/ListVideo.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

export default function ListVideoPage() {
  return (
    <div>
      <Header />
      <ListVideoComponent />
      <Footer />
    </div>
  );
}
