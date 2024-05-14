import React, { useEffect, useState } from "react";
import axios from 'axios';
import './VisUsuarioStyle.css'
import { Link } from "react-router-dom";

const Visus = () => {
    const [usuarios, setUsuarios] = useState([]);

    let id = 1

    useEffect(() => {
        axios.get(`http://localhost:8001/user/${id}`)
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, [id]);

    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Usuário</h1></div>
                <div className="visus">
                    <div className="boxvisus">
                        <input type="text" placeholder="User" value={usuarios.username || ''} readOnly/>
                        <input type="text" placeholder="Nível" value={usuarios.nivel || ''} readOnly/>
                        <input type="text" placeholder="Senha" value={usuarios.senha || ''} readOnly/>
                        <input type="text" placeholder="E-mail" value={usuarios.email || ''} readOnly/>
                    </div>
                    <Link className="botaovisus" to='/login'>Fechar</Link>
                </div>
        </div>
    )
}

export default Visus;