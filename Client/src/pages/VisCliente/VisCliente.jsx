import React, { useEffect, useState } from "react";
import axios from 'axios';
import './VisClienteStyle.css'
import { Link } from "react-router-dom";

const Viscl = () => {

    const [clientes, setClientes] = useState([]);

    let id = 1

    useEffect(() => {
        axios.get(`http://localhost:8001/cliente/${id}`)
            .then(response => {
                setClientes(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar pedido:', error);
            });
    }, [id]);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Clientes</h1></div>
                <div className="viscl">
                    <div className="boxviscl">
                        <input type="text" placeholder="Nome" value={clientes.nome || ''} readOnly/>
                        <input type="text" placeholder="Telefone" value={clientes.telefone || ''} readOnly/><br/>
                        <input type="number" placeholder="CPF" value={clientes.cpf || ''} readOnly/><br/>
                        <input type="text" placeholder="Endereço" value={clientes.endereco || ''} readOnly/><br/>
                        <input type="text" placeholder="Observações" value={clientes.obs || ''} readOnly/>
                    </div>
                    <Link className="botaoviscl" to='/menu'>Fechar</Link>
                </div>
        </div>
    )
}

export default Viscl;