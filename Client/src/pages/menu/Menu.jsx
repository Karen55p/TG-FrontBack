import React from "react";
import './MenuStyle.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Menu do Usuário</h1></div>
                <div className="menu">
                    <Link className="botaomenu" to='/login'>Pedidos</Link>
                    <Link className="botaomenu" to='/login'>Clientes</Link>
                    <Link className="botaomenu" to='/listus'>Usuários</Link>
                </div>
        </div>
    )
}


export default Menu;