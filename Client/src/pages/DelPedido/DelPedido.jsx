import React from "react";
import './DelPedidoStyle.css'
import { Link } from "react-router-dom";
import axios from 'axios';

const Delpd = () => {

    const id = 5 //coloquei só pra testar e tá funcionando legal, mas n pode deixar assim
    
    const deletePedido = async () => {
        try {
            const response = await axios.delete(`http://localhost:8001/pedido/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Pedidos</h1></div>
                <div className="delpd">
                <p>Tem certeza que deseja excluir Pedido com ID: ------ </p>
                <div className="btdelpd">
                    <div ><button className="b1cl" onClick={deletePedido}>Sim</button></div>                    
                    <div ><Link className="b2pd" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}


export default Delpd;