import React, { useEffect } from 'react'
import ListVideoComponent from '../../components/Video/ListVideoComponent'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function ListVideo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header/>
        <ListVideoComponent />
      <Footer/>
    </div>
  )
}

export default ListVideo