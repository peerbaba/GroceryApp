import React from 'react'
import Banner from "../component/Banner";
import BestSeller from "../component/BestSeller";
import Category from "../component/Category";
import NewsLetter from "../component/NewsLetter";
import Navbar from '../component/Navbar';

function FrontPage() {
  const tag = "Freshness You Can Trust, Savings You will Love!"
  return (
    <div  className="bg-white mt-10" >
      <Banner tre={tag} />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  )
}

export default FrontPage
