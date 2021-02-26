const { IonButton, IonList } = require('@ionic/react');

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
                    lf.push(lista[i]);
                }
                // uso de fn para cambiar el state de escenas
                verLista(lf)
            });
        });           
    }

    //fn para cambiar el render fuente (render es para a que vea y que no se vea)
    const cambioFt = (fuente)=>{
        Conectar().then(()=>{
            fuente.render = !fuente.render;
            obs.send('SetSceneItemRender', {source: fuente.name, render: fuente.render});
        });
    };  

    //renderizacion (lo que vera el usuario)
    return (       
        <div>
            <IonButton onClick={verFuentes} expand = "full" >Listado de Fuentes</IonButton>
                {fuente.length > 1 && 
                    <div>
                        <li>
                        {fuente.map((esc, num=0) => (
                        <IonButton id={esc.name} key={num+=1} expand = "block" class="btn-escena" onClick={(e) => cambioFt(esc,e)}>
                            {esc.name}
                        </IonButton>
                        ))} 
                        </li> 
                    </div>    
                }   
        </div>
    );
};

export default OBSFuente;