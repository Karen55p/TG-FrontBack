import React from "react";
import './ListUsuáriosStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const ListUs = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Usuários</h1></div>
                <div className="listus">
                    <Table className="tabelaus">
                        <tread>
                            <tr>
                                <th>
                                    test
                                </th>
                            </tr>
                        </tread>
                    </Table>
                        <Link className="blistus1" to='/'>Modificar</Link>
                        <Link className="blistus2" to='/'>Cadastrar</Link>
                        <Link className="blistus3" to='/delus'>Deletar</Link>
                </div>
        </div>
    )
}


export default ListUs;