import React from "react";
import './CadUsuarioStyle.css'

const Cadus = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Usuário</h1></div>
                <div className="cad">
                    <div className="boxc">
                        <input type="text" placeholder="User" required maxLength={20} />
                    </div>
                    <div className="boxc">
                        <input type="password" placeholder="Senha" required maxLength={30} />
                    </div>
                    <div className="boxc">
                        <input type="text" placeholder="E-mail" required maxLength={30} />
                    </div>
                    <button className="botaoc">Gravar</button>
                </div>
        </div>
    )
}


export default Cadus;