import React from "react";
import './DelClienteStyle.css'
import { Link } from "react-router-dom";
import axios from 'axios';

const Delcl = () => {
    
    const id = 6 //coloquei só pra testar e tá funcionando legal, mas n pode deixar assim

    const deleteCliente = async () => {
        try {
            const response = await axios.delete(`http://localhost:8001/cliente/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Cliente</h1></div>
                <div className="delcl">
                <p>Tem certeza que deseja excluir cliente com CPF: ------ </p>
                <div className="btdelcl">
                    <div ><button className="b1cl" onClick={deleteCliente}>Sim</button></div>                    
                    <div ><Link className="b2cl" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}

export default Delcl;