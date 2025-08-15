import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Copagecards.css'

const Poker = () => {
  return (
    <>
    <Header />
    <div>
    <div className="copagecards-container">
        <div className="main-div">
          <div className="image-container">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/category/poker.webp" 
              className="responsive-image" 
              alt="Copag Card" 
            />
          </div>
          
          <div className="text-container">
            <span className="text-title">Best Quality Copag Playing Cards</span>
            <p className="text-subtitle">Buy 100% PVC plastic Copag playing cards</p>
          </div>
        </div>

        {/* Start Cards Section */}
        <div className="cards-section">
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/png/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/_/a/_ad_7875_cc.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 1</h3>
            <p className="card-description">High-quality playing cards for professionals.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/png/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/b/e/bee-playing-cards-jumbo-index-1.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 2</h3>
            <p className="card-description">Durable and waterproof playing cards.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/png/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/b/e/bee-playing-cards-jumbo-index-2_1.webp" 
              className="card-image" 
               
            />
            <h3 className="card-title">Card 3</h3>
            <p className="card-description">Ideal for poker games and tournaments.</p>
          </div>
        </div>
        <div className="cards-section">
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/png/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/t/a/tally-ho_circle-back-blue_4.webp" 
              className="card-image" 
               
            />
            <h3 className="card-title">Card 4</h3>
            <p className="card-description">High-quality playing cards for professionals.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/c/o/copag_texas_hold_em_burgundy.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 5</h3>
            <p className="card-description">Durable and waterproof playing cards.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/w/s/wsop_red_blue.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 6</h3>
            <p className="card-description">Ideal for poker games and tournaments.</p>
          </div>
        </div>
        <div className="cards-section">
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/b/e/bee_regular_blue_1.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 7</h3>
            <p className="card-description">High-quality playing cards for professionals.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/b/e/bee_regular_red_2.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 8</h3>
            <p className="card-description">Durable and waterproof playing cards.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/c/o/copag_elite_blue_tuck_back.webp" 
              className="card-image" 
               
            />
            <h3 className="card-title">Card 9</h3>
            <p className="card-description">Ideal for poker games and tournaments.</p>
          </div>
        </div>
        <div className="cards-section">
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/u/n/untitled-6.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 10</h3>
            <p className="card-description">High-quality playing cards for professionals.</p>
          </div>
          <div className="card">
            <img 
              src="https://artofcards.in/media/mf_webp/jpg/media/catalog/product/cache/7a2c576f548a17dbcaf3bf28ddf7017a/u/n/untitled-7.webp" 
              className="card-image" 
              
            />
            <h3 className="card-title">Card 11</h3>
            <p className="card-description">Durable and waterproof playing cards.</p>
          </div>
          
        </div>
        
        {/* End Cards Section */}

        <h2 style={{color:"red", textAlign:"center"}}>Poker Set - Buy Vegas-Style Poker Sets in India</h2>
        <p>Get a casino-like experience without driving to one. At Art of Cards, we offer best poker chip sets. Our big blind poker sets are best in terms of quality and visuals.

Our poker sets come with 2 decks of poker playing cards. These are the best waterproof playing cards. Together with visually stunning chips, they enhance your poker experience.

Our big blind poker sets are designed to impress. Your friends and family would surely love the finish of the chip sets and the crisp sound they make. Buy poker set from us and become a poker star among stars!</p>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Poker
