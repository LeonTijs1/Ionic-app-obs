import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel} from '@ionic/react';
import React from 'react';
import './Tab1.css';
import Escena from '../components/OEscena';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Escenas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
            <IonItem lines="none">
              <IonLabel color="primary">
                <h1>Pulse el boton para exportar sus escenas</h1>
                <Escena></Escena>
              </IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
