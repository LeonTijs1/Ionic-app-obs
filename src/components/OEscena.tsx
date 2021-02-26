import React, { useState } from 'react';
import ObsWebSocket_ from '../services/ObsSocketEscena';
import './OEscena.css';

interface ContainerProps {
}

const Escena: React.FC<ContainerProps> = () => {
  const [scenes, setEscenas] = useState(['']);
  const guardarEscenas = (lista_escenas:string[])=>{
    setEscenas(lista_escenas);
  }

  return (
    <div>
      <header> <h1>Su escenas en OBS</h1> </header>  
      <ObsWebSocket_ scenes={scenes} verLista={guardarEscenas} />
    </div>     
  );
};

export default Escena;