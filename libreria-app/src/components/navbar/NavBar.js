import React from 'react';
import { Nav,Navbar,NavDropdown,Container} from "react-bootstrap";
import CartIcon from "../../icon/CartIcon";

const BarraNav = () => {
  return (
  <Navbar bg="blue" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Bookingham - Tienda de libros</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Desplegable" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ficcion</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">No Ficcion</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Comics</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartIcon />
  </Container>
</Navbar>
  );
};

export default BarraNav;
