import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Complete.css';
import Pattern from '../../assets/images/pattern.png';
import startIcons from '../../assets/images/star-icon.png';
import successIcon from '../../assets/images/success-icon.png';

export const Complete: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonContent class='ion-padding'>
        <img
          alt='Pattern'
          src={Pattern}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
          }}
        />
        <div className='complete-container'>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ width: 120, height: 120 }}
                src={successIcon}
                alt='success'
              />
            </div>
            <IonText class='ion-text-center'>
              <h1>
                <b>
                  Thank You! <br /> Order Completed
                </b>
              </h1>
            </IonText>
            <IonText color={'medium'} class='ion-text-center'>
              <p>Please rate your last Driver</p>
            </IonText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={startIcons} />
            </div>
          </div>
        </div>
      </IonContent>
      <IonFooter className='ion-no-border'>
        <IonGrid>
          <IonRow>
            <input
              placeholder={'Leave feedback'}
              style={{
                width: '100%',
                height: '48px',
                borderRadius: '8px',
                padding: '12px',
                outline: 'none',
                border: '1px solid rgba(246, 246, 246, 1)',
                boxSizing: 'border-box',
              }}
            />
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className='complete-submit-btn' expand='block'>
                Submit
              </IonButton>
            </IonCol>
            <IonCol size='auto'>
              <IonButton
                style={{
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                  borderRadius: 7,
                }}
                color={'white'}
              >
                <IonText color={'danger'}>
                  <b>Skip</b>
                </IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};
