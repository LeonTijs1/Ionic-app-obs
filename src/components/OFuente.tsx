import React, { useState } from 'react';
import ObsWebSocket_ from '../services/ObsSocketFuentes';
import './OFuente.css';

interface ContainerProps {
}

const Fuente: React.FC<ContainerProps> = () => {
  const [scenes, setEscenas] = useState(['']);
  const guardarEscenas = (lista_escenas:string[])=>{
    setEscenas(lista_escenas);
  }

  return (   
      <div> 
        <ObsWebSocket_ 
          fuente={scenes}
          verLista={guardarEscenas}
        />
      </div>     
  );
};

export default Fuente;