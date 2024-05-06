import React from "react";
import './VisClienteStyle.css'
import { Link } from "react-router-dom";

const Viscl = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Clientes</h1></div>
                <div className="viscl">
                    <div className="boxviscl">
                        <input type="text" placeholder="Cliente" required maxLength={40}/>
                        <input type="text" placeholder="Tipo de produto" required maxLength={40} /><br/>
                        <input type="text" placeholder="Dimensões" required maxLength={40} /><br/>
                        <input type="text" placeholder="Tipo de Material" required maxLength={40} /><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} /><br/>
                        <input type="text" placeholder="Observações" required maxLength={40}/>
                    </div>
                    <Link className="botaoviscl" to='/menu'>Gravar</Link>
                </div>
        </div>
    )
}

export default Viscl;