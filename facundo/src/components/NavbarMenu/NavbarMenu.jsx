//--------------Importaciones---------------
// Estilos
import './NavbarMenu.css'

// Importaciones
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {

  return (
    <Navbar className='navbar'>
        <Container>
          <Navbar.Brand className='nav-img'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="React Logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavbarMenu;