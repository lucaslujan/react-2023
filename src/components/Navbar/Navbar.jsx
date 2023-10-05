
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = ({children}) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar bg-info">
                <Container>
                    <Link className='link' to='/'>Tienda deportiva</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className= {({isActive })=>isActive ? 'btn btn-primary' : 'btn btn-light' } to='/category/gorras'>Gorras </NavLink>
                            <NavLink className= {({isActive })=>isActive ? 'btn btn-primary' : 'btn btn-light' } to='/category/remeras'>Remeras </NavLink>
                    </Nav>
                        <Nav>
                            <Link to='/cart'>
                                  <CartWidget/>
                            </Link>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         {children}
        </>
)}

export default NavBar
