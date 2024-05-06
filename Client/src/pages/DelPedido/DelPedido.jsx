import React from "react";
import './DelPedidoStyle.css'
import { Link } from "react-router-dom";

const Delpd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Pedidos</h1></div>
                <div className="delpd">
                <p>Tem certeza que deseja excluir Pedido com ID: ------ </p>
                <div className="btdelpd">
                    <div ><Link className="b1pd" to='/menu'>Sim</Link></div>                    
                    <div ><Link className="b2pd" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}


export default Delpd;