import { IonCard, IonCardContent, IonGrid, IonRow, IonText, IonCardTitle } from "@ionic/react";
import { WeatherProperty } from "./WeatherProperty";

export const CurrentWeather = ({currentWeather}) => (

  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
      
        <IonText color="primary">
          <h1>Toronto, <span style={{ color: "gray" }}>Canada</span></h1>
        </IonText>

        <div className="ion-margin-top">
        <img alt="condition" src="//s1.twnmm.com/images/en_ca/icons/wxicons_medium/19.png" />

        {/* the api not return image I fixed from one from the network wheater
        <img alt="condition" src={currentWeather.obs.image_url} /> */}
          
          <IonText color="dark">
            <h1 style={{fontWeight: "bold"}}>{currentWeather.obs.wxca }</h1>
          </IonText>
          
          <IonText color="medium">
            <p>{currentWeather.obs.updatetime}</p>
          </IonText>
        </div>

        <IonCardTitle style={{fontSize: "3rem"}} className="ion-margin-top">{currentWeather.obs.fc || ''}&#8451;</IonCardTitle>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <WeatherProperty type="wind" currentWeather={currentWeather} />
            <WeatherProperty type="feelsLike" currentWeather={currentWeather} />
          </IonRow>

          <IonRow className="ion-margin-top">
            <WeatherProperty type="indexUV" currentWeather={currentWeather} />
            <WeatherProperty type="pressure" currentWeather={currentWeather} />
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);