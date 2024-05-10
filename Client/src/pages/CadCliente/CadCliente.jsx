import React, { useState } from "react";
import axios from 'axios';
import './CadClienteStyle.css'
//import { response } from "express";
import { useNavigate } from "react-router-dom";

const Cadcl = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const navigate = useNavigate();

    const handleCadCliente = () => {
        //validar entrada
        //dps tu faz uma validação melhorzinha pfvr aí
        if (!nome || !telefone || !cpf || !endereco) {
            console.error('Todos os campos são obrigatórios!');
            return;
        }

        const newCliente = {
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            endereco: endereco,
            obs: observacoes
        };

        axios.post('http://localhost:8001/cliente', newCliente)
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
            <div className="titulo"><h1>Cadastro de Cliente</h1></div>
                <div className="cadcl">
                    <div className="boxcdcl">
                        <input type="text" placeholder="Nome" required maxLength={40} value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="text" placeholder="Telefone" required maxLength={40} value={telefone} onChange={e => setTelefone(e.target.value)}/><br/>
                        <input type="number" placeholder="CPF" required maxLength={11} value={cpf} onChange={e => setCpf(e.target.value)}/><br/>
                        <input type="text" placeholder="Endereço" required maxLength={40} value={endereco} onChange={e => setEndereco(e.target.value)}/><br/>
                        <input type="text" placeholder="Observações" value={observacoes} onChange={e => setObservacoes(e.target.value)}/>
                    </div>
                    <button className="botaocdcl" onClick={handleCadCliente}>Gravar</button>
                </div>
        </div>
    )
}

export default Cadcl;