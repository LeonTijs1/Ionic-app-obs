const { IonButton } = require('@ionic/react');

const OBSEscenas = ({scenes, verLista}) => {

    const OBSWebSocket = require('obs-websocket-js');
    const obs = new OBSWebSocket();

    //fn para la conexion a OBS
    const Conectar = ()=>{
        const OBS = obs.connect({
            address: '192.168.0.2:4444',
            password: 'holamundo'
        })
        return OBS;
    }

    //fn para ver escenas y cambiar lo que esta en la pagina
    const verEscenas = ()=>{
        Conectar().then(()=>{
            obs.send('GetSceneList').then((data)=>{
                let lista_escenas = [];
                const lista = data.scenes;
                for (let i=0; i < lista.length; i++) {
                    lista_escenas.push(lista[i].name);}
                //uso de fn para cambiar el state de escenas
                verLista(lista_escenas) 
            });
        });           
    }

    //fn para cambiar la escena 
    const cambioEsc = (scenes)=>{
        Conectar().then(() => {
            obs.send('SetCurrentScene', {"scene-name":scenes});
        });
    }

    //renderizacion (lo que vera el usuario)
    return (
        <div>           
            <IonButton onClick={verEscenas} expand = "full" >Listado de Escenas</IonButton>
            {scenes.length > 1 &&
                <div>
                    <li>
                    {scenes.map((esc, num=0) => (    
                    <IonButton id={esc} key={num+=1} expand = "block" class="btn-escena" onClick={(e) => cambioEsc(esc,e)}>{esc}</IonButton>
                    ))} 
                    </li> 
                </div>              
            }
        </div>
    );
};

export default OBSEscenas;