import '../styles/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" placeholder="Nombre y Apellido" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" placeholder="Correo electrónico" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Celular</label>
                        <input type="text" placeholder="Sin 0 y sin 15" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea placeholder="Escriba su mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="botones">
                        <input type="submit" value="Enviar" />
                        <input type="reset" value="Borrar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null }
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También podés comunicarte con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>cel: 3415889988</li>
                    <li>mail: contacto@rosailing.com.ar</li>
                    <li><br /><img src="img/face.png" alt="" width="50px" /><span> .... </span>
                        <img src="img/insta.png" alt="" width="50px" /></li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;