import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ModClienteStyle.css'
import { useNavigate } from "react-router-dom";

const Modcl = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const navigate = useNavigate();

    let id = 3

    useEffect(() => {
        axios.get(`http://localhost:8001/cliente/${id}`)
            .then(response => {
                const cliente = response.data;
                setNome(cliente.nome);
                setTelefone(cliente.telefone);
                setCpf(cliente.cpf);
                setEndereco(cliente.endereco);
                setObservacoes(cliente.observacoes);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, [id]);


    const handleModCliente = () => {
        //validar entrada
        //dps tu faz uma validação melhorzinha pfvr aí
        if (!nome || !telefone || !cpf || !endereco) {
            console.error('Todos os campos são obrigatórios!');
            return;
        }

        //dps a gente tem q dar um jeito de fazer os dados aparecerem na tela, mas já tá funcionando assim
        axios.put(`http://localhost:8001/cliente/${id}`, {
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            endereco: endereco,
            observacoes: observacoes
        })
            .then(response => {
                console.log(response.data)
                navigate('/menu');
            })
            .catch(error => {
                console.error('Erro ao cadastrar cliente:', error);
            });
    };

    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Cliente</h1></div>
                <div className="cadcl">
                    <div className="boxcdcl">
                    <input type="text" placeholder="Nome" required maxLength={40} value={nome} onChange={e => setNome(e.target.value)} />
                        <input type="text" placeholder="Telefone" required maxLength={40} value={telefone} onChange={e => setTelefone(e.target.value)}/><br/>
                        <input type="number" placeholder="CPF" required maxLength={11} value={cpf} onChange={e => setCpf(e.target.value)}/><br/>
                        <input type="text" placeholder="Endereço" required maxLength={40} value={endereco} onChange={e => setEndereco(e.target.value)}/><br/>
                        <input type="text" placeholder="Observações" value={observacoes} onChange={e => setObservacoes(e.target.value)}/>
                    </div>
                    <button className="botaocdcl" onClick={handleModCliente}>Gravar</button>
                </div>
        </div>
    )
}

export default Modcl;