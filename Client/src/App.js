import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Login from "./pages/Login/Login";
import Menu from "./pages/menu/Menu";
import ListUs from "./pages/ListUsuários/ListUsuários";
import Listpd from "./pages/ListPedidos/ListPedidos";
import Listcl from "./pages/ListClientes/ListClientes";
import Cadus from "./pages/CadUsuario/CadUsuario";
import Cadpd from "./pages/CadPedidos/CadPedidos";
import Cadcl from "./pages/CadCliente/CadCliente";
import Delus from "./pages/DelUsuario/DelUsuario";
import Delpd from "./pages/DelPedido/DelPedido";
import Delcl from "./pages/DelCliente/DelCliente";
import Modpd from "./pages/ModPedido/ModPedido";
import Modus from "./pages/ModUsuario/ModUsuario";
import Viscl from "./pages/VisCliente/VisCliente";
import Vispd from "./pages/VisPedido/VisPedido";
import Filpd from "./pages/FilPedido/FilPedido";

const App = () => {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/listus" element={<ListUs/>}/>
              <Route path="/listpd" element={<Listpd/>}/>
              <Route path="/listcl" element={<Listcl/>}/>
              <Route path="/cadus" element={<Cadus/>}/>
              <Route path="/cadpd" element={<Cadpd/>}/>
              <Route path="/cadcl" element={<Cadcl/>}/>
              <Route path="/delus" element={<Delus/>}/>
              <Route path="/delcl" element={<Delcl/>}/>
              <Route path="/delpd" element={<Delpd/>}/>
              <Route path="/modpd" element={<Modpd/>}/>
              <Route path="/modus" element={<Modus/>}/>
              <Route path="/viscl" element={<Viscl/>}/>
              <Route path="/vispd" element={<Vispd/>}/>
              <Route path="/filpd" element={<Filpd/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
    }

export default App;