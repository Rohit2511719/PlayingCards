import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Header.css' // same CSS use karenge jo Disneymarvel me hai

const LearntoPlay = () => {
  return (
    <>
      <Header />
      <div className="copagecards-container">
        {/* Top Banner Section */}
        <div className="main-div">
          <div className="image-container">
            <img 
              src="https://www.artofplay.com/cdn/shop/products/Top-4H5A0509_45f8ab04-d8bb-4f62-abe7-4a26801ca8e4.png?v=1751118150&width=600" 
              className="responsive-image" 
              alt="Learn to Play" 
            />
          </div>
          
          <div className="text-container">
            <span className="text-title" >Learn to Play Cards</span>
            <p className="text-subtitle">Master the art of playing cards with style</p>
          </div>
        </div>

        {/* Start Cards Section */}
        <div className="cards-section">
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/Mindfulness_17b4fa3f-61a7-479a-8934-f9f9752346f1.png?v=1643374569&width=600" className="card-image" />
            <h3 className="card-title">Ace of Spades</h3>
            <p className="card-description">The most iconic card in the deck.</p>
          </div>
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/DKNG_Gold_Back.png?v=1645021688&width=600" className="card-image" />
            <h3 className="card-title">King of Hearts</h3>
            <p className="card-description">Known as the 'suicide king'.</p>
          </div>
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/just-type-playing-cards-edition2-front-pentagram.png?v=1668786119&width=600" className="card-image" />
            <h3 className="card-title">Queen of Clubs</h3>
            <p className="card-description">Strong and strategic card in games.</p>
          </div>
        </div>

        <div className="cards-section">
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/GaslampRed_Back_0c1d81bf-52a0-41ef-b781-4ca318489096.png?v=1636413400&width=600" className="card-image" />
            <h3 className="card-title">Jack of Diamonds</h3>
            <p className="card-description">Charming but tricky to use.</p>
          </div>
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/AOP_Front.png?v=1671209835&width=600" className="card-image" />
            <h3 className="card-title">Ten of Spades</h3>
            <p className="card-description">Perfect for building winning hands.</p>
          </div>
          <div className="card">
            <img src="https://www.artofplay.com/cdn/shop/products/messymod-playing-cards-box.png?v=1751118224&width=600" className="card-image" />
            <h3 className="card-title">Nine of Hearts</h3>
            <p className="card-description">A card of luck and love.</p>
          </div>
        </div>

        {/* Info Section */}
        <h2 style={{color:"red", textAlign:"center"}}>Learn Different Card Games</h2>
        <p>
          Whether you want to master Poker, Rummy, or Solitaire, learning to play cards can 
          improve your focus, memory, and strategic thinking. From simple games to high-stakes 
          tournaments, understanding the rules and strategies can make you a champion.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default LearntoPlay
