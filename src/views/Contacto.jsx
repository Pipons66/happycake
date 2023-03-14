import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto"

export default () => {
    return(
        <Container className="text-center">
            <h1>Cuéntanos, ¿En que podemos ayudarte? </h1>
            <Contacto />
        </Container>
    )
}