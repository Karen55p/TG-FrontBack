import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ModPedidosStyle.css'
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Modpd = () => {

    const [prazo, setPrazo] = useState("");
    const [material, setMaterial] = useState("");
    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [mobilia, setMobilia] = useState("");
    const [sugest, setSugest] = useState("");
    const [cliente , setCliente] = useState("")
    const navigate = useNavigate();

    let id = 3

    useEffect(() => {
        axios.get(`http://localhost:8001/pedido/${id}`)
            .then(response => {
                const pedido = response.data;
                setPrazo(pedido.prazo);
                setMaterial(pedido.material);
                setAltura(pedido.altura);
                setLargura(pedido.largura);
                setComprimento(pedido.comprimento);
                setMobilia(pedido.mobilia);
                setSugest(pedido.sugest);
                setCliente(pedido.id_cliente);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, [id]);

    const handleModPedido = () => {
        
        //faz validação de dados aqui, tem que aparecer na tela pfvr
        //faz o prazo entrar como data
        /*if (!prazo || !telefone || !cpf || !endereco) {
            console.error('Todos os campos são obrigatórios!');
            return;
        }*/

        axios.put(`http://localhost:8001/pedidos/${id}`, {
            prazo: prazo,
            material: material,
            altura: altura,
            largura: largura,
            comprimento: comprimento,
            mobilia: mobilia,
            sugest: sugest,
            id_cliente: cliente,
        })
            .then(response => {
                console.log(response.data)
                navigate('/menu');
            })
            .catch(error => {
                console.error('Erro ao cadastrar pedido:', error);
            });
    }

    return (
        <div className="pagina">
            <div className="titulo"><h1>Cadastro de Pedido</h1></div>
                <div className="cadpd">
                    <div className="boxcdpd1">
                        <div className="sprite">Figura do personagem</div>
                        <input className="obs" type="text" placeholder="Observações" /* n sei oq esse campo faz, tem outra obs já em baixo aí tu vê *//>
                    </div>
                    <div className="boxcdpd"> 
                        <input type="text" placeholder="Cliente" required maxLength={40} value={cliente} onChange={e => setCliente(e.target.value)}/>
                        <input type="text" placeholder="Mobilia" required maxLength={40} value={mobilia} onChange={e => setMobilia(e.target.value)}/><br/>
                        <div className="dimensoes">
                            <input type="number" placeholder="A" maxLength={40} value={altura} onChange={e => setAltura(e.target.value)}></input>
                            <input type="number" placeholder="L" maxLength={40} value={largura} onChange={e => setLargura(e.target.value)}></input>
                            <input type="number" placeholder="C" maxLength={40} value={comprimento} onChange={e => setComprimento(e.target.value)}></input>
                        </div>
                        <input type="text" placeholder="Material" required maxLength={40} value={material} onChange={e => setMaterial(e.target.value)}/><br/>
                        <input type="date" placeholder="Prazo" required maxLength={40} value={prazo} onChange={e => setPrazo(e.target.value)}/><br/>
                        <input type="text" placeholder="Observações" required maxLength={40} value={sugest} onChange={e => setSugest(e.target.value)}/>
                    </div>
                    <button className="botaocdcl" onClick={handleModPedido}>Gravar</button>
                </div>
        </div>
    )
}

export default Modpd;