import React, { useEffect, useState } from 'react';
import {
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { CurrentWeather } from '../components/CurrentWeather';
import { SkeletonDashboard } from '../components/SkeletonDashboard';

const Tab1 = () => {
  const [currentWeather, setCurrentWeather] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(`https://www.theweathernetwork.com/api/data/caon0696/hourly`);
        const data = await response.json();
        console.log(data);
        setCurrentWeather(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    getApi();
  }, []); 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow className="ion-margin-start ion-margin-end ion-justify-content-center ion-text-center">
          <IonCol size="12">
            <h4>Here's your location-based weather</h4>
          </IonCol>
        </IonRow>

        <div style={{ marginTop: '-1.5rem' }}>
          {loading ? (
            <SkeletonDashboard />
          ) : (
            currentWeather && <CurrentWeather currentWeather={currentWeather} />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
