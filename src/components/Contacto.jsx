import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Navigation () {
    return (
        <Container className="text-center">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control className="text-center" type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Button variant="danger" type="submit">
                Enviar
                </Button>
            </Form>
      </Container>
    
    )
}