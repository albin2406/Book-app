import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'} className="text-dark">
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/3145/3145765.png?ga=GA1.1.741439151.1729139238&semt=ais_hybrid"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Book Store
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
