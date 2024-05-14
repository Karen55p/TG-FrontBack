import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ListPedidosStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Listp = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/pedidos')
            .then(response => {
                setPedidos(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar pedidos:', error);
            });
    }, []);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Pedidos</h1></div>
                <div className="listus">
                    <Table className="tabelaus">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Prazo</th>
                                <th>Material</th>
                                <th>Altura</th>
                                <th>Largura</th>
                                <th>Comprimento</th>
                                <th>Mobilia</th>
                                <th>Sugestão</th>
                                <th>ID do Cliente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map(pedido => (
                                <tr key={pedido.id}>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.prazo}</td>
                                    <td>{pedido.material}</td>
                                    <td>{pedido.altura}</td>
                                    <td>{pedido.largura}</td>
                                    <td>{pedido.comprimento}</td>
                                    <td>{pedido.mobilia}</td>
                                    <td>{pedido.sugest}</td>
                                    <td>{pedido.id_cliente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Link className="botaolistus" to='/login'>Modificar</Link>
                    <Link className="botaolistus" to='/login'>Cadastrar</Link>
                    <Link className="botaolistus" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}

export default Listp;