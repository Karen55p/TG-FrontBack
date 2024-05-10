import React from "react";
import './FilPedidoStyle.css'
import { Link } from "react-router-dom";

const Filpd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Filtro de Pedidos</h1></div>
                <div className="filpd">
                    <div className="boxfilpd">
                        <input type="text" placeholder="Cliente" required maxLength={40}/>
                        <input type="text" placeholder="Mobilia" required maxLength={40} /><br/>
                        <div className="dimensoes">
                            <input type="number" placeholder="A"></input>
                            <input type="number" placeholder="L"></input>
                            <input type="number" placeholder="C"></input>
                        </div>
                        <input type="text" placeholder="Material" required maxLength={40} /><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} /><br/>
                        <input type="text" placeholder="Observações"/>
                    </div>
                    <Link className="botaofilpd" to='/menu'>Voltar</Link>
                </div>
        </div>
    )
}

export default Filpd;