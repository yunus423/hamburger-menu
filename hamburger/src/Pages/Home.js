import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../assets/banner.jpg"


const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${bannerImage})`}}>
        <div className='headerContainer'>
  <h1> Doğan Burger </h1> 
  <p> Delicious Burgers <br/> with 47 spicy mixed</p>
  <Link to="/menu"><button>Order Now</button></Link>
        </div>
    </div>
  )
}

export default Home