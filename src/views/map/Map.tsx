import {
  IonButton,
  IonCard,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import {
  chevronBackOutline,
  location,
  locationOutline,
  notificationsOutline,
} from 'ionicons/icons';
import './Map.css';
import MapImg from '../../assets/images/maps.png';
import { Link } from 'react-router-dom';

export const Map: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <IonRow class='profile-toolbar product-list-toolbar'>
            <IonButton onClick={goBack} className='profile-back-btn'>
              <IonIcon color='danger' icon={chevronBackOutline} />
            </IonButton>

            <IonButton className='profile-back-btn'>
              <IonIcon color='danger' icon={notificationsOutline} />
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className='map-page' fullscreen class='ion-padding'>
        <div style={{ paddingLeft: 12, paddingRight: 12 }}>
          <input
            placeholder={'Where is your location'}
            style={{
              width: '100%',
              height: '48px',
              borderRadius: '8px',
              padding: '12px',
              border: 'none',
              outline: 'none',
              boxSizing: 'border-box',
              backgroundColor: ' rgb(255, 233, 233)',
            }}
          />
        </div>

        <div className='navigator-img'>
          <div className='navigator-box-img'>
            <div className='navigator-locator-img'></div>
          </div>
        </div>
      </IonContent>
      <IonFooter class='ion-padding'>
        <IonCard
          style={{
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 22,
            }}
          >
            <div>
              <IonText color={'dark'} style={{ fontSize: 18, lineHeight: 1.5 }}>
                Your Location
              </IonText>
              <br />
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <IonIcon size='large' color='danger' icon={locationOutline} />

                <IonText
                  color={'dark'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  109, Freedom Way, Off Lekki Phase Victoria
                </IonText>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: -12,
              paddingLeft: 22,
              paddingRight: 22,
              paddingBottom: 12,
            }}
          >
            <Link style={{ textDecoration: 'none' }} to={'/complete'}>
              <IonButton className='location-btn' expand='block'>
                <IonText color={'light'}>
                  <b> Set Location</b>
                </IonText>
              </IonButton>
            </Link>
          </div>
        </IonCard>
      </IonFooter>
    </IonPage>
  );
};
