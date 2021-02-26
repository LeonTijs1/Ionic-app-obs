import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg} from '@ionic/react';
import React from 'react';
import './Tab1.css';
import Escena from '../components/OEscena';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Escena></Escena>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
