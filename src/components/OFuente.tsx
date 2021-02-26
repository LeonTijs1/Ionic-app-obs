import React, { useState } from 'react';
import ObsWebSocket_ from '../services/ObsSocketFuentes';
import './OFuente.css';

interface ContainerProps {
}

const Fuente: React.FC<ContainerProps> = () => {
  const [fuente, setFuente] = useState(['']);
  const verFuente = (lf:string[])=>{
    setFuente(lf);
  }

  return (
    <div>
      <header> <h1>Las fuentes de su escena</h1> </header>
      <ObsWebSocket_ fuente={fuente} verLista={verFuente} />
    </div>      
  );
};

export default Fuente;