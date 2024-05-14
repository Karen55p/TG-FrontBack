import React, { useEffect, useState } from "react";
import axios from 'axios';
import './VisPedidoStyle.css'
import { Link } from "react-router-dom";

const Vispd = () => {

    const [pedidos, setPedidos] = useState([]);

    let id = 1

    useEffect(() => {
        axios.get(`http://localhost:8001/pedido/${id}`)
            .then(response => {
                setPedidos(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar pedido:', error);
            });
    }, [id]);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Pedidos</h1></div>
                <div className="vispd">
                    <div className="boxvispd">
                        <input type="text" placeholder="Cliente" value={pedidos.id_cliente || ''} readOnly/><br/>
                        <input type="text" placeholder="Mobilia" value={pedidos.mobilia || ''} readOnly/><br/>
                        <div className="dimensoes">
                            <input type="number" placeholder="A" value={pedidos.altura || ''} readOnly></input>
                            <input type="number" placeholder="L" value={pedidos.largura || ''} readOnly></input>
                            <input type="number" placeholder="C" value={pedidos.comprimento || ''} readOnly></input>
                        </div><br/>
                        <input type="text" placeholder="Material" value={pedidos.material || ''} readOnly/><br/>
                        <input type="date" placeholder="Prazo" value={pedidos.prazo || ''} readOnly/><br/>
                        <input type="text" placeholder="Observações" value={pedidos.sugest || ''} readOnly/>
                    </div>
                    <Link className="botaovispd" to='/login'>Fechar</Link>
                </div>
        </div>
    )
}

export default Vispd;