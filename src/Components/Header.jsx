import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserAlt, FaShoppingCart, FaHeart } from 'react-icons/fa'; 
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Nav.Link as={Link} to="/"><Navbar.Brand className='text-p'>ART of CARDS</Navbar.Brand></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="me-3"><b>Bicycle Cards</b></Nav.Link>
              <Nav.Link as={Link} to="/copagcards" className="me-3"><b>Copag Cards</b></Nav.Link>
              <Nav.Link as={Link} to="/poker" className="me-3"><b>Poker</b></Nav.Link>
              <Nav.Link as={Link} to="/disneymarvel" className="me-3"><b>Disney Marvel</b></Nav.Link>
              <Nav.Link as={Link} to="/learntoplay" className="me-3"><b>Learn To Play</b></Nav.Link>
              <Nav.Link as={Link} to="/mumbaiIndians" className="me-3"><b>Mumbai Indians</b></Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <FaSearch size={20} style={{ cursor: "pointer" }} title="Search" />
              <Nav.Link as={Link} to="/signup"><FaUserAlt size={20} style={{ cursor: "pointer" }} title="Profile" /></Nav.Link>
              <FaHeart size={20} style={{ cursor: "pointer", color: "red" }} title="Likes" /> {/* Like Icon */}
              <FaShoppingCart size={20} style={{ cursor: "pointer" }} title="Cart" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
