import React from "react";
import './DelUsuarioStyle.css'
import { Link } from "react-router-dom";
import axios from 'axios';

const Delus = () => {

    const id = 3 //coloquei só pra testar e tá funcionando legal, mas n pode deixar assim
    
    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8001/user/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="pagina">
            <div className="titulo"><h1>Deletar Usuário</h1></div>
                <div className="del">
                <p>Tem certeza que deseja excluir usuário com ID: ------ </p>
                <div className="btdel">
                    <div ><button className="b1cl" onClick={deleteUser}>Sim</button></div>                    
                    <div ><Link className="b2" to='/menu'>Não</Link></div>
                </div>
                </div>
        </div>
    )
}


export default Delus;