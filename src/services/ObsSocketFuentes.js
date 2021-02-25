const { IonButton } = require('@ionic/react');

//constate para las escenas
const OBSFuente = ({fuente, verLista}) => {

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

    //fn para ver fuentes y cambiar lo que esta en la pagina
    const verFuentes = ()=>{
        Conectar().then(()=>{
            obs.send('GetCurrentScene').then((data)=>{
                let lf = [];
                const lista = data.sources;
                for (let i=0; i < lista.length; i++) {
                    lf.push(lista[i].name);}
                // uso de fn para cambiar el state de escenas
                verLista(lf) 
            });
        });           
    }

    //fn para cambiar la escena 
    const cambioEsc = (fuente)=>{
        Conectar().then(() => {
            obs.send('SetSourceName', {"sourceName":fuente});
        });
    }

    //renderizacion (lo que vera el usuario)
    return (
        <div>
            <IonButton onClick={''} size='large'>Agregar Fuentes</IonButton>
            <div>
                <IonButton onClick={verFuentes} size='large'>Listado de Fuentes</IonButton>
                {fuente.length > 0 &&
                    <div>
                        {fuente.map((esc, num=0) => (
                        <IonButton id={esc} key={num+=1} class="fuente" onClick={(e) => cambioEsc(esc,e)}> {esc} </IonButton>
                        ))}  
                    </div>    
                }
            </div>
        </div>
    );
};

export default OBSFuente;