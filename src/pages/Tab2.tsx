import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Tab2.css';
import Fuente from '../components/OFuente';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fuentes para la escena</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
            <IonItem lines="none">
              <IonLabel color="primary">
                <h1>Pulse el boton para exportar sus escenas</h1>
                <Fuente></Fuente>
              </IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
