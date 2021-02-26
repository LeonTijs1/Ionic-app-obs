import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Tab2.css';
import Fuente from '../components/OFuente';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Fuente></Fuente>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
