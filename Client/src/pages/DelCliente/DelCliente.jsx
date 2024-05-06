import React from "react";
import './DelClienteStyle.css'
import { Link } from "react-router-dom";

const Delcl = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Cliente</h1></div>
                <div className="delcl">
                <p>Tem certeza que deseja excluir cliente com CPF: ------ </p>
                <div className="btdelcl">
                    <div ><Link className="b1cl" to='/menu'>Sim</Link></div>                    
                    <div ><Link className="b2cl" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}


export default Delcl;