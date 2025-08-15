import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './MumbaiIndians.css'

const MumbaiIndians = () => {
  const miCards = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
      title: "Team Logo",
      desc: "The official logo of Mumbai Indians."
    },
    {
      img: "https://imgs.search.brave.com/WIyD4_nNbyfvO9P5Uw96mJ32ciS9j4bGh36pQLywcp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzg4/Mzc4NS5qcGc",
      title: "Rohit Sharma",
      desc: "The Hitman – legendary MI captain."
    },
    {
      img: "https://imgs.search.brave.com/Wm_MQnqvpeEnYKLz5Aq0sk87DOKyFbSFp0idupeMCSk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlyc3Rwb3N0/LmNvbS91cGxvYWRz/LzIwMjQvMTEvSGFy/ZGlrLVBhbmR5YS1N/SS1SQ0ItSVBMLTIw/MjQtUFRJLTEyMDAt/MjAyNC0xMS0wYmMz/NzI4NjM3ZmZkZTgy/Zjk5OGY1M2IyMmFj/MjIwMS5qcGc_aW09/Rml0QW5kRmlsbD0o/NTk2LDMzNik",
      title: "Hardik Pandya",
      desc: "The all-rounder and current MI captain."
    },
    {
      img: "https://imgs.search.brave.com/7tiJ_JfcKiZnTqXke3S6MrE79U9t8TGjiNoPIVPvId8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81OTMv/NDU5L0hELXdhbGxw/YXBlci1zdXJ5YWt1/bWFyLXlhZGF2LWhp/dHRpbmctZm91ci1z/dXJ5YWt1bWFyLXlh/ZGF2LWhpdHRpbmct/Zm91ci1za3ktbXVt/YmFpLWluZGlhbnMt/YmF0dGluZy1zcG9y/dHMtdGh1bWJuYWls/LmpwZw",
      title: "Suryakumar Yadav",
      desc: "Mr. 360° – aggressive batsman."
    }
  ]

  return (
    <>
      <Header />
      <div className="mi-container">
        {/* Top Banner */}
        <div className="mi-banner">
          <h1 className="mi-title">Mumbai Indians</h1>
          <p className="mi-subtitle">One Family. One Goal. Five-Time Champions.</p>
        </div>

        {/* Cards Section */}
        <div className="mi-cards">
          {miCards.map((card, index) => (
            <div className="mi-card" key={index}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MumbaiIndians
