import NavBar from "./Navbar";
import './style.css'
import {useState,useEffect} from 'react';
const Assinc = ()=>{
    const cadastraPessoa = (event) =>{
        event.preventDefault();
        console.log("Cadastrou");
    }
    return(
        <div>
        <h1>Treinando Requisição Assíncrona com ReactNative</h1>
            <NavBar/>
         
                <form action="" method="post"className="FormContainer" onSubmit={cadastraPessoa}>
                    <label htmlFor="form">Nome</label>
                    <input type="text" name="nome" id="dados"placeholder="Insira seu nome completo" />
                    <label htmlFor="form">Telefone</label>
                    <input type="text" name="telefone" id="dados"placeholder="Insira seu telefone com ddd" />
                    <input type="submit" value="Enviar" id="button"/>
                </form>
                
                <div className="section">
                    <h2>Nomes cadastrados:</h2>
                    <ul>Nomes:
                        <li></li>
                    </ul>
                    <ul>Telefones:
                        <li></li>
                    </ul>
                 </div>
                 <p>Nessa lista vai aparecer os nomes e telefones cadastrados.
                    Essa se alimenta do arquivo json onde é enviado o formulário </p>
        </div>
    )
}

export default Assinc;