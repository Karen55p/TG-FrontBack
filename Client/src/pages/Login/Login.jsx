import React, { useState } from "react";
import axios from 'axios';
import './LoginStyle.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//Login funciona, cheque o resultado no console
//Jogar erro de login inválido na tela para o usuário
const Login = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:8001/user', {
            username: username,
            senha: senha
        })
            .then(response => {
                console.log(response.data)
                navigate('/menu');
            })
            .catch(error => {
                console.error('Erro ao Fazer login:', error);
            });
    };

    return (
        <div className="pagina">
            <div className="titulo"><h1>Menu de Login</h1></div>
                <div className="login">
                    <div className="box">
                        <FaUserCircle className="icon" />
                        <input type="text" placeholder="User" required maxLength={20} value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="box">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Senha" required maxLength={30} value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <button className="botao" onClick={handleLogin}>Entrar</button>
                </div>
        </div>
    )
}


export default Login;