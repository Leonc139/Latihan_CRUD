import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CRUD REACT JS</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
