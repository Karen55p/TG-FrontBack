import React from "react";
import './VisPedidoStyle.css'

const Vispd = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Visualizar Pedidos</h1></div>
                <div className="vispd">
                    <div className="boxvispd">
                        <input type="text" placeholder="Cliente"/><br/>
                        <input type="text" placeholder="Mobilia"/><br/>
                        <div className="dimensoes">
                            <input type="number" placeholder="A"></input>
                            <input type="number" placeholder="L"></input>
                            <input type="number" placeholder="C"></input>
                        </div><br/>
                        <input type="text" placeholder="Material"/><br/>
                        <input type="date" placeholder="Prazo"/><br/>
                        <input type="text" placeholder="Observações"/>
                    </div>
                    <button className="botaovispd">Gravar</button>
                </div>
        </div>
    )
}

export default Vispd;