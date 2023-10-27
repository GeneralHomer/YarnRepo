import { useState } from 'react';
import '../Components/style.css';
import NavBar from './Navbar';


export default function TreinoProps(){
    const corCinza = 'bg-gray';
    const corRoxa = 'bg-purple';
    const esconde = 'hideDiv';
    const mostra = 'mostra';
    const [novaCor,setNovaCor] = useState(corCinza);
    const [atualizaStyle,setAtualizaStyle] = useState(true);
    const [atualizaExibicao, setAtualizaExibicao] = useState(esconde);
    const [showHide,setShowHide] = useState(true);
    /*para criar o showHide, vou precisar criar um componente pai nestes doc
    para que ele mude seu state ao clicar no botão "\/"*/

    const setHide = ()=>{
       if(showHide ===false)
       {
        setAtualizaExibicao(mostra);
        setShowHide(true)
        
       }else{
        setAtualizaExibicao(esconde);
        setShowHide(false);
       }
    }
    const changeColor = ()=>{
        if(atualizaStyle ===true){
            setAtualizaStyle(false);
            setNovaCor(corRoxa);
        }else{
            setAtualizaStyle(true);
            setNovaCor(corCinza);
        }
    }
    return(
        <div className='PropsContainer' >
            
        <h1>Treinando Props</h1>
         <NavBar/>
        <p>Neste item estou treinando recebimento e envio de props a outros componentes</p> 
        <p>Vou usar essa página para manipulação do DOM por eventos e Props</p> 
            
        <div className={novaCor}>
            
            
        </div>
        <input onClick={changeColor} type="button" value="Mudar Backgroud" className={'btn-color-change'}/>
        <div className={atualizaExibicao} >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nulla in suscipit doloremque atque eius, libero maiores accusantium beatae cum quaerat inventore iure dolorem, tempore molestias laboriosam repudiandae ipsa? Sit!

            </p>
            
        </div>
        
       <input type="button" value="show" onClick={setHide}/>
        
        </div>
    )
}