import React, { useState } from "react";
import axios from 'axios';
import './CadUsuarioStyle.css'
import { useNavigate } from "react-router-dom";

const Cadus = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [nivel, setNivel] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleCadUsuario = () => {

        const newUser = {
            username: username,
            email: email,
            nivel: nivel,
            senha: senha,
        }

        axios.post('http://localhost:8001/users', newUser)
        .then(response => {
            console.log(response.data)
            navigate('/menu');
        })
        .catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
        });

    }
    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Usuário</h1></div>
                <div className="cad">
                    <div className="boxc">
                        <input type="text" placeholder="User" required maxLength={20} value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="boxc">
                        <input type="text" placeholder="Nível" required maxLength={20} value={nivel} onChange={e => setNivel(e.target.value)} /* Esse nível precisa ser um select com 2 opções: Administrador e usuário comum *//>
                    </div>
                    <div className="boxc">
                        <input type="password" placeholder="Senha" required maxLength={30} value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <div className="boxc">
                        <input type="text" placeholder="E-mail" required maxLength={30}value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="botaoc" onClick={handleCadUsuario}>Gravar</button>
                </div>
        </div>
    )
}


export default Cadus;