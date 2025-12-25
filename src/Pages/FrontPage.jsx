import React from 'react'
import Banner from "../component/Banner";
import BestSeller from "../component/BestSeller";
import Category from "../component/Category";
import NewsLetter from "../component/NewsLetter";
import Navbar from '../component/Navbar';

function FrontPage() {
  return (
    <div  className="bg-white mt-10" >
      <Banner />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  )
}

export default FrontPage
