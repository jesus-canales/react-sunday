import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

function Formulario (){
    return(
        <>
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Ingresa tus nombres"></Form.Control>
                <Form.Control type="text" placeholder="Ingresa tus apellidos" ></Form.Control>
                <Form.Control type="text" placeholder="Ingresa tu número de celular" ></Form.Control>
                <Form.Control type="text" placeholder="Ingresa tu lugar de procedencia"></Form.Control>
            </Form.Group>
            <Button>Enviar datos</Button>
        </Form>
        </>
    );
}

export default Formulario;