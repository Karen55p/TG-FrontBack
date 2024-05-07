import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ListClientesStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Listcl = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/clientes')
            .then(response => {
                setClientes(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar clientes:', error);
            });
    }, []);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Clientes</h1></div>
                <div className="listcl">
                    <Table className="tabelacl">
                        <tread>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>CPF</th>
                                <th>Endereco</th>
                                <th>Observação</th>
                            </tr>
                        </tread>
                        <tbody>
                            {clientes.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.endereco}</td>
                                    <td>{cliente.obs}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Link className="botaolistcl" to='/login'>Modificar</Link>
                    <Link className="botaolistcl" to='/login'>Cadastrar</Link>
                    <Link className="botaolistcl" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}


export default Listcl;