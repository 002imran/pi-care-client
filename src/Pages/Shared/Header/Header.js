import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/picare-logo.png'

const Header = () => {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-4"
      >
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{ height: "50px", width: "50px", borderRadius: "100%" }}
            className="ms-5 d-none d-lg-block"
          />
        </Link>
        <Container>
          <Navbar.Brand className="fs-2">
            <Link to="/" className='text-decoration-none text-white'>PI-Care</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="fs-5 ms-4 ps-4"
          >
            <Nav className="me-auto gap-4">
              <Link to="/" className="text-decoration-none text-white">
                Courses
              </Link>
              <Link to="/blog" className="text-decoration-none text-white">
                Blog
              </Link>
            </Nav>
            <Nav className="gap-4">
              <Link to="/faq" className="text-decoration-none text-white">
                FAQ?
              </Link>
              <Link
                // eventKey={2}
                to="/login"
                className="text-decoration-none text-white"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <>
          <div className="form-check form-switch ms-auto mt-3 me-3 d-none d-lg-block">
            <label className="form-check-label ms-3" htmlFor="lightSwitch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-brightness-high"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="lightSwitch"
            />
          </div>
        </>
      </Navbar>
    );
}

export default Header;