import React from "react";
import './VisPedidoStyle.css'
import { Link } from "react-router-dom";

const Vispd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Pedidos</h1></div>
                <div className="vispd">
                    <div className="boxvispd">
                        <input type="text" placeholder="Cliente" required maxLength={40}/>
                        <input type="text" placeholder="Tipo de produto" required maxLength={40} /><br/>
                        <input type="text" placeholder="Dimensões" required maxLength={40} /><br/>
                        <input type="text" placeholder="Tipo de Material" required maxLength={40} /><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} /><br/>
                        <input type="text" placeholder="Observações" required maxLength={40}/>
                    </div>
                    <Link className="botaovidpd" to='/menu'>Gravar</Link>
                </div>
        </div>
    )
}

export default Vispd;