import React from "react";
import './FilPedidoStyle.css'
import { Link } from "react-router-dom";

const Filpd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Filtro de Pedidos</h1></div>
                <div className="filpd">
                    <div className="boxfilpd">
                        <input type="text" placeholder="Cliente" required maxLength={40}/>
                        <input type="text" placeholder="Tipo de produto" required maxLength={40} /><br/>
                        <input type="text" placeholder="Dimensões" required maxLength={40} /><br/>
                        <input type="text" placeholder="Tipo de Material" required maxLength={40} /><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} /><br/>
                        <input type="text" placeholder="Observações" required maxLength={40}/>
                    </div>
                    <Link className="botaofilpd" to='/menu'>Voltar</Link>
                </div>
        </div>
    )
}

export default Filpd;