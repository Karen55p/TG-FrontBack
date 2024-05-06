import React from "react";
import './ModUsuarioStyle.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modus = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Modificar de Usuário</h1></div>
                <div className="mod">
                    <div className="boxm">
                        <FaUserCircle className="iconm" />
                        <input type="text" placeholder="User" required maxLength={20} />
                    </div>
                    <div className="boxm">
                        <FaLock className="iconm" />
                        <input type="password" placeholder="Senha" required maxLength={30} />
                    </div>
                    <Link className="botaom" to='/menu'>Gravar</Link>
                </div>
        </div>
    )
}


export default Modus;