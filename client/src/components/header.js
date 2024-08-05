import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLanguage,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import defaultProfile from "../assets/images/default-user.png";
// bg="dark" variant="dark"
const Header = () => {
  return (
    <div className="headercontainer">
      <div className="navBackground"></div>
      <Navbar data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <div className="vr" />

          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-links">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faLanguage} />
            </Nav.Link>
            <Nav.Link href="#features">
              <FontAwesomeIcon icon={faTableCellsLarge} />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faBell} />
            </Nav.Link>
            <Nav.Link href="#pricing" name="profile">
              <img src={defaultProfile} alt="profile" height={30} width={30} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
