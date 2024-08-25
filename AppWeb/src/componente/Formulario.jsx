import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Formulario (){
    const [ nombre, setNombre ] = useState('');
    const [ apellidos, setApellidos ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ lugar, setLugar] = useState('lugar');

    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúñ\s]+$/;
    const regexNumero = /^[0-9]{1,9}$/;

    const realizandoEnvio = (e) => {
        e.preventDefault;
        if (nombre === '' || apellidos === '' || celular === '' || lugar === '') {
            alert('Las cajas están vacías...');
        }
        if ((regexTexto.test(nombre) === false && nombre != '') || (regexTexto.test(apellidos) === false && apellidos != '') || (regexNumero.test(celular) === false && celular != '') || (regexTexto.test(lugar) === false && lugar != '')) {
            alert('No se ha ingresado datos validos');
            console.log('click');

        } else {
            alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${celular}, ${lugar} }`);
        }

    }

    const cambioNombre = (e) => setNombre(e.target.value);
    const cambioApellido = (e) => setApellidos(e.target.value);
    const cambioCelular = (e) => setCelular(e.target.value);
    const cambioLugar = (e) => setLugar(e.target.value);

    return(
        <>
        <Form onSubmit={realizandoEnvio} >
            <Form.Group>
                <Form.Control type="text" value={nombre} onChange={cambioNombre} placeholder="Ingresa tus nombres"></Form.Control>
                <Form.Control type="text" value={apellidos} onChange={cambioApellido} placeholder="Ingresa tus apellidos" ></Form.Control>
                <Form.Control type="text" value={celular} onChange={cambioCelular} placeholder="Ingresa tu número de celular" ></Form.Control>
                <Form.Control type="text" value={lugar} onChange={cambioLugar} placeholder="Ingresa tu lugar de procedencia"></Form.Control>
            </Form.Group>
            <Button type="submit">Enviar datos</Button>
        </Form>
        </>
    );
}

export default Formulario;