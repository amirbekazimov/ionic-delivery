import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OrderDetail.css';
import {
  addOutline,
  bagCheckOutline,
  chevronBackOutline,
  heart,
  location,
  removeOutline,
  star,
} from 'ionicons/icons';
import Burger from '../../assets/images/background-burger.png';

export const OrderDetail: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <IonRow class='profile-toolbar product-list-toolbar'>
            <IonButton className='profile-back-btn'>
              <IonIcon color='danger' icon={chevronBackOutline} />
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonText style={{ fontSize: 26 }}>
          <b>Order details</b>
        </IonText>

        <IonGrid>
          <IonRow>
            <IonCol
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 90,
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                  borderRadius: 7,
                  gap: 5,
                }}
              >
                <img style={{ width: 80, borderRadius: 7 }} src={Burger} />
                <div style={{ fontSize: 18 }}>
                  <IonText color={'dark'}>Chicken Burger</IonText>
                  <br />
                  <IonText style={{ fontSize: 13 }} color={'medium'}>
                    Burger Factory LTD
                  </IonText>
                  <br />
                  <IonText color={'danger'}>
                    <b>$ 20</b>
                  </IonText>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <button className='detail-icon-order'>
                    <IonIcon color='danger' icon={removeOutline} />
                  </button>
                  <IonText color={'dark'}>
                    <b>1</b>
                  </IonText>
                  <button
                    style={{ backgroundColor: 'rgb(245,0,28)' }}
                    className='detail-icon-order'
                  >
                    <IonIcon color='light' icon={addOutline} />
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 90,
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                  borderRadius: 7,
                  gap: 5,
                }}
              >
                <img style={{ width: 80, borderRadius: 7 }} src={Burger} />
                <div style={{ fontSize: 18 }}>
                  <IonText color={'dark'}>Chicken Burger</IonText>
                  <br />
                  <IonText style={{ fontSize: 13 }} color={'medium'}>
                    Burger Factory LTD
                  </IonText>
                  <br />
                  <IonText color={'danger'}>
                    <b>$ 20</b>
                  </IonText>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <button className='detail-icon-order'>
                    <IonIcon color='danger' icon={removeOutline} />
                  </button>
                  <IonText color={'dark'}>
                    <b>1</b>
                  </IonText>
                  <button
                    style={{ backgroundColor: 'rgb(245,0,28)' }}
                    className='detail-icon-order'
                  >
                    <IonIcon color='light' icon={addOutline} />
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 90,
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                  borderRadius: 7,
                  gap: 5,
                }}
              >
                <img style={{ width: 80, borderRadius: 7 }} src={Burger} />
                <div style={{ fontSize: 18 }}>
                  <IonText color={'dark'}>Chicken Burger</IonText>
                  <br />
                  <IonText style={{ fontSize: 13 }} color={'medium'}>
                    Burger Factory LTD
                  </IonText>
                  <br />
                  <IonText color={'danger'}>
                    <b>$ 20</b>
                  </IonText>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <button className='detail-icon-order'>
                    <IonIcon color='danger' icon={removeOutline} />
                  </button>
                  <IonText color={'dark'}>
                    <b>1</b>
                  </IonText>
                  <button
                    style={{ backgroundColor: 'rgb(245,0,28)' }}
                    className='detail-icon-order'
                  >
                    <IonIcon color='light' icon={addOutline} />
                  </button>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFooter>
          <IonCard
            style={{
              backgroundColor: 'rgb(245,0,18)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(245,0,18)',
                padding: 22,
              }}
            >
              <div>
                <IonText
                  color={'light'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  Sub-Total
                </IonText>
                <br />
                <IonText
                  color={'light'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  Delivery Change
                </IonText>
                <br />
                <IonText color={'light'} style={{ fontSize: 18 }}>
                  Discount
                </IonText>
                <br />
                <br />
                <IonText color={'light'} style={{ fontSize: 18 }}>
                  <b>Total</b>
                </IonText>
              </div>
              <div>
                <IonText
                  color={'light'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  100 $
                </IonText>
                <br />
                <IonText
                  color={'light'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  10 $
                </IonText>
                <br />
                <IonText
                  color={'light'}
                  style={{ fontSize: 18, lineHeight: 1.5 }}
                >
                  10 $
                </IonText>
                <br />
                <br />
                <IonText color={'light'} style={{ fontSize: 18 }}>
                  <b>110$</b>
                </IonText>
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
              <IonButton color={'light'} expand='block'>
                <IonText color={'danger'}>
                  <b> Place My Order</b>
                </IonText>
              </IonButton>
            </div>
          </IonCard>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};
