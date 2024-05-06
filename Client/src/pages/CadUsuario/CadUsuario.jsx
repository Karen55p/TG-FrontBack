import React from "react";
import './CadUsuarioStyle.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cadus = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Usuário</h1></div>
                <div className="cad">
                    <div className="boxc">
                        <FaUserCircle className="iconc" />
                        <input type="text" placeholder="User" required maxLength={20} />
                    </div>
                    <div className="boxc">
                        <FaLock className="iconc" />
                        <input type="password" placeholder="Senha" required maxLength={30} />
                    </div>
                    <Link className="botaoc" to='/menu'>Gravar</Link>
                </div>
        </div>
    )
}


export default Cadus;