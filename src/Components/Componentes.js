import { useState } from 'react';

import '../App.css';
import './style.css'
  

import NavBar from './Navbar';
export default function Componentes(){

  const [nome,setNome] = useState('Homero');
  const [number, setNumber] = useState(0);
  const mudaNumero = ()=>{
    setNumber ((coisa)=>coisa+1);
  }
  const zerarNumero = ()=>{
    setNumber(0);
  }
  const mensagem=()=>{
    alert("clicou no h1");
  }
    return (
        <div className = "componente">
          <h1>Tutorial Vite</h1>
          <NavBar/>
          <h1 onClick={mensagem}>Olá {nome}, Bem vindo ao hook </h1>
          
          <div>

          
            <p>Número: {number}</p>
            <button type="button" onClick={mudaNumero}>Contar</button>
            <button onClick={zerarNumero}>Zerar</button>
          </div>
          <input type="text" name="" id="" value={nome} onChange={e=>setNome(e.target.value)}/>
          <h1>Comandos do Vite/JSX</h1>
          <ul><h2>Lista de comandos</h2>
            <li><p className='subTitle'>npm install vite@latest:</p> serve para instalar o vite</li>
            <li><p>Como Fazer: </p>Selecione seu framework e a linguagem</li>
            <li><p>Selecionando o diretório do Projeto:</p>cd para a pasta do projeto e roda um npm install</li>
            <li>pronto, já pode começar a codar!</li>
            <li><p>Para rodar seu projeto em ambiente dev use:</p> <p className='red'>npm run dev</p></li>
          </ul>
          <footer>
            <h3><p>Segue no link do vídeo para mais dicas:</p>
              <ul>Lista de links:
                <li><a href="https://www.youtube.com/watch?v=oXb-UE60KkI">Video Aula</a></li>
                <li><a href="https://www.youtube.com/watch?v=yx6bt-LSKq8&list=PL5jAze9390OT-ckQHRNpfj9lN_nvmDDyw&index=4">
                Porque usar vite ao invés de create-react-app?
              </a></li>
              <li>
                <a href="https://www.youtube.com/watch?v=3m3UaEvQkhQ&list=PL5jAze9390OT-ckQHRNpfj9lN_nvmDDyw&index=3">
                  Video aula de useState
                </a>
              </li>
              </ul>
            </h3>
            <div></div>
            <h1>Esteja sempre atualizado e vlw!</h1>
          </footer>
        </div>
      )
  }