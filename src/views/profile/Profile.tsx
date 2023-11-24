import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import {
  chevronBackOutline,
  logoGoogle,
  notificationsOutline,
} from 'ionicons/icons';
import './Profile.css';

export const Profile: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <IonRow class='profile-toolbar'>
            <IonButton onClick={goBack} className='profile-back-btn'>
              <IonIcon color='danger' icon={chevronBackOutline} />
            </IonButton>
            <IonButton className='profile-back-btn'>
              <IonIcon color='danger' icon={notificationsOutline} />
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText style={{ fontSize: 28 }}>
                <b>Profile</b>
              </IonText>

              <IonAvatar style={{ margin: '24px auto', width: 80, height: 80 }}>
                <img
                  alt="Silhouette of a person's head"
                  src='https://ionicframework.com/docs/img/demos/avatar.svg'
                />
              </IonAvatar>
              <div style={{ marginTop: '25px' }}>
                <IonText style={{ fontSize: 20 }}>
                  <b>Personal Info</b>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonList
              style={{ width: '100%', border: '1px solid rgb(246,246,246)' }}
              inset={true}
            >
              <IonItem lines='none'>
                <IonLabel>
                  {' '}
                  <IonText style={{ color: 'rgb(59,59,59)' }}>
                    Your name
                  </IonText>{' '}
                  Tommy Jason
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <IonLabel>
                  <IonText style={{ color: 'rgb(59,59,59)' }}>
                    Occupation
                  </IonText>{' '}
                  Manager
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <IonLabel>
                  <IonText style={{ color: 'rgb(59,59,59)' }}>Employe</IonText>{' '}
                  Overlay Design
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <IonLabel>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 22 }}
                  >
                    <IonText style={{ color: 'rgb(59,59,59)' }}>
                      U.S Citizen
                    </IonText>{' '}
                    <IonToggle color='danger' checked={true}></IonToggle>
                  </div>
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <IonLabel>Super Mario World</IonLabel>
              </IonItem>
            </IonList>

            <IonText style={{ fontSize: 20 }}>
              <b>Contact Info</b>
            </IonText>

            <IonList
              style={{ width: '100%', border: '1px solid rgb(246,246,246)' }}
              inset={true}
            >
              <IonItem lines='none'>
                <IonLabel>
                  {' '}
                  <IonText style={{ color: 'rgb(59,59,59)' }}>
                    Phone
                  </IonText>{' '}
                  +998901234567
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <IonLabel>
                  <IonText style={{ color: 'rgb(59,59,59)' }}>Email</IonText>{' '}
                  deliveryapp@gmail.com
                </IonLabel>
              </IonItem>
            </IonList>
          </IonRow>
        </IonGrid>
        <IonFooter>
          <IonButton
            expand='block'
            className='profile-btn'
            style={{ margin: '0 16px' }}
          >
            <b>Edit</b>
          </IonButton>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};
