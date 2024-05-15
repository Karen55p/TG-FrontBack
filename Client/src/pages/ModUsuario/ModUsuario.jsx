import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ModUsuarioStyle.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Modus = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [nivel, setNivel] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    let id = 1

    useEffect(() => {
        axios.get(`http://localhost:8001/user/${id}`)
            .then(response => {
                const user = response.data;
                setUsername(user.username);
                setEmail(user.email);
                setNivel(user.nivel);
                setSenha(user.senha);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, [id]);

    const handleModUsuario = () => {

        const newUser = {
            username: username,
            email: email,
            nivel: nivel,
            senha: senha,
        }

        axios.put(`http://localhost:8001/user/${id}`, newUser)
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
            <div className="titulo"><h1>Modificar de Usuário</h1></div>
                <div className="mod">
                    <div className="boxm">
                        <FaUserCircle className="iconm" />
                        <input type="text" placeholder="User" required maxLength={20} value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="boxc" /* acrescenta dps, n tem o falock*/>
                        <input type="text" placeholder="E-mail" required maxLength={30}value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="boxc">
                        <input type="text" placeholder="Nível" required maxLength={20} value={nivel} onChange={e => setNivel(e.target.value)} /* Esse nível precisa ser um select com 2 opções: Administrador e usuário comum *//>
                    </div>
                    <div className="boxm">
                        <FaLock className="iconm" />
                        <input type="password" placeholder="Senha" required maxLength={30} value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <button className="botaoc" onClick={handleModUsuario}>Gravar</button>
                </div>
        </div>
    )
}


export default Modus;