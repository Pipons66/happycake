import {Link} from "react-router-dom";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
        <Navbar bg="danger" variant="danger">
            <Container>
                <div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>  
                    <Link to="contacto" className="text-white ms-3 text-decoration-none">
                        Contacto
                    </Link> 
                </div>
                <NavbarBrand className="text-white"> 🎂 Happy Cake </NavbarBrand>
            </Container>
        </Navbar>
    </>
  );
}