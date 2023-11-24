import {
  IonButton,
  IonCard,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
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
  attachOutline,
  chevronBackOutline,
  locationOutline,
  notificationsOutline,
} from 'ionicons/icons';
import './Chat.css';
import { Link } from 'react-router-dom';
import ChatRobot from '../../assets/images/chat-robot.png';
import Pattern from '../../assets/images/Pattern2.png';

export const Chat: React.FC = () => {
  const history = useHistory();

  const chatMessages = [
    {
      category: 1,
      text: 'Segun Phillips',
    },
    {
      category: 2,
      text: 'Is there Basmati Rice and pepper chicken?',
    },
    {
      category: 1,
      text: 'Hello! Segun 👋. I can converse  in your preferred language. How  may I help you today? ',
    },
    {
      category: 2,
      text: 'Is there Basmati Rice and pepper chicken?',
    },
  ];

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <img
          alt='Pattern'
          src={Pattern}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            zIndex: -1,
            width: '100%',
            opacity: 0.3,
          }}
        />
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
      <IonContent fullscreen class='ion-padding'>
        <IonText style={{ fontSize: 28 }}>
          <b>Chat</b>
        </IonText>

        <IonGrid>
          <IonImg style={{ width: 50 }} src={ChatRobot} alt='asd'></IonImg>
          <IonRow>
            <div style={{ width: '100%' }}>
              {chatMessages.map((message, index) => (
                <IonCard
                  key={index}
                  style={{
                    maxWidth: '80%',
                    borderRadius: '10px',
                    padding: '12px',
                    margin: '5px',
                    marginTop: '15px',
                    backgroundColor:
                      message.category === 2
                        ? 'rgb(245,0,18)'
                        : 'rgb(246,246,246)',
                    float: message.category === 2 ? 'right' : 'left',
                    color: message.category === 2 ? 'white' : 'black',
                  }}
                >
                  <IonText>{message.text}</IonText>
                </IonCard>
              ))}
            </div>
          </IonRow>
        </IonGrid>
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
            <br />
            <div
              style={{
                width: '100%',
                display: 'flex',
                gap: 20,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 40,
                  background: 'rgb(255,229,229)',
                  borderRadius: 7,
                }}
              >
                <IonIcon
                  style={{ fontSize: 24, rotate: '45deg' }}
                  color='danger'
                  icon={attachOutline}
                />
              </div>
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
                  backgroundColor: ' rgb(246,246,246)',
                }}
              />
            </div>
          </div>
        </IonCard>
      </IonFooter>
    </IonPage>
  );
};
