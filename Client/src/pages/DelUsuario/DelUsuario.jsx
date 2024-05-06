import React from "react";
import './DelUsuarioStyle.css'
import { Link } from "react-router-dom";

const Delus = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Usuário</h1></div>
                <div className="del">
                <p>Tem certeza que deseja excluir usuário com ID: ------ </p>
                <div className="btdel">
                    <div ><Link className="b1" to='/menu'>Sim</Link></div>                    
                    <div ><Link className="b2" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}


export default Delus;