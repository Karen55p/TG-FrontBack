import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ListUsuáriosStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const ListUs = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/user')
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, []);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Usuários</h1></div>
                <div className="listus">
                    <Table className="tabelaus">
                        <tread>
                            <tr>
                                <th>Id</th>
                                <th>Nome de Usuário</th>
                                <th>Email</th>
                                <th>Nível</th>
                                <th>Senha</th>
                            </tr>
                        </tread>
                        <tbody>
                            {usuarios.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.nivel}</td>
                                    <td>{user.senha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                        <Link className="blistus1" to='/'>Modificar</Link>
                        <Link className="blistus2" to='/'>Cadastrar</Link>
                        <Link className="blistus3" to='/delus'>Deletar</Link>
                </div>
        </div>
    )
}


export default ListUs;