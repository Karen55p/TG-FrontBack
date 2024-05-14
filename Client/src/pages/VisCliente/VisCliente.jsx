import React from "react";
import './VisClienteStyle.css'
import { Link } from "react-router-dom";

const Viscl = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Clientes</h1></div>
                <div className="viscl">
                    <div className="boxviscl">
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="Telefone"/><br/>
                        <input type="number" placeholder="CPF"/><br/>
                        <input type="text" placeholder="Endereço"/><br/>
                        <input type="text" placeholder="Observações"/>
                    </div>
                    <Link className="botaoviscl" to='/menu'>Fechar</Link>
                </div>
        </div>
    )
}

export default Viscl;