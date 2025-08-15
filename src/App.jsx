import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Copagecards from "./Components/Copagecards"
import Disneymarvel from "./Components/Disneymarvel"
import Home from "./Components/Home"
import Poker from "./Components/Poker"
import LearntoPlay from './Components/LearntoPlay';
import MumbaiIndians from './Components/MumbaiIndians';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/copagcards" element={<Copagecards/>}/>
          <Route path="/poker" element={<Poker/>}/>
          <Route path="/disneymarvel" element={<Disneymarvel/>}/>
          <Route path="/learntoplay" element={<LearntoPlay/>}/>
          <Route path="/mumbaiIndians" element={<MumbaiIndians/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/privacy-policy' element={<Privacy/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
