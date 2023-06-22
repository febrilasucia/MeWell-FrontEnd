import React from 'react'
import ListVideoComponent from '../../components/Video/ListVideoComponent'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function ListVideo() {
  return (
    <div>
      <Header/>
        <ListVideoComponent />
      <Footer/>
    </div>
  )
}

export default ListVideo