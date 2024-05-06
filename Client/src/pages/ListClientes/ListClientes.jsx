import React from "react";
import './ListClientesStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Listcl = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Clientes</h1></div>
                <div className="listcl">
                    <Table className="tabelacl">
                        <tread>
                            <tr>
                                <th>
                                    test
                                </th>
                            </tr>
                        </tread>
                    </Table>
                    <Link className="botaolistcl" to='/login'>Modificar</Link>
                    <Link className="botaolistcl" to='/login'>Cadastrar</Link>
                    <Link className="botaolistcl" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}


export default Listcl;