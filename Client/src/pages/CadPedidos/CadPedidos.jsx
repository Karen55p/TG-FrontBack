import React from "react";
import './CadPedidosStyle.css'
import { Link } from "react-router-dom";

const Cadpd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Pedido</h1></div>
                <div className="cadpd">
                    <div className="boxcdpd1">
                        <div class="sprite">Figura do personagem</div>
                        <input className="obs" type="text" placeholder="Observações" required maxLength={40}/>
                    </div>
                    <div className="boxcdpd"> 
                        <input type="text" placeholder="Cliente" required maxLength={40}/>
                        <input type="text" placeholder="Tipo de produto" required maxLength={40} /><br/>
                        <input type="text" placeholder="Dimensões" required maxLength={40} /><br/>
                        <input type="text" placeholder="Tipo de Material" required maxLength={40} /><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} /><br/>
                    </div>
                    <Link className="botaoc" to='/menu'>Gravar</Link>
                </div>
        </div>
    )
}

export default Cadpd;