import React from "react";
import './ModClienteStyle.css'

const Modcl = () => {
    return (
        <div className="pagina">
        <div className="titulo"><h1>Modificar Cliente</h1></div>
            <div className="modcl">
                <div className="boxmdcl">
                    <input type="text" placeholder="Nome" required maxLength={40}/>
                    <input type="text" placeholder="Telefone" required maxLength={40} /><br/>
                    <input type="number" placeholder="CPF" required maxLength={11} /><br/>
                    <input type="text" placeholder="Endereço" required maxLength={40} /><br/>
                    <input type="text" placeholder="Observações"/>
                </div>
                <button className="botaomdcl">Gravar</button>
            </div>
    </div>
    )
}

export default Modcl;