import React from 'react'
import Slider from './Slider'
import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import Seller from './Seller'
import Section1 from './Section1'
import Section2 from './Section2'
const Home = () => {
  return (

    <div>
        <Header/>
      <Slider/>
      <Card/>
      <Section1/>
      <Seller/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default Home
