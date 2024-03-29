import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
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
import './ProductDetail.css';
import {
  bagCheckOutline,
  chevronBackOutline,
  heart,
  location,
  star,
} from 'ionicons/icons';
import Burger from '../../assets/images/burger-perfect.jpeg';
import { Link, useHistory } from 'react-router-dom';

export const ProductDetail: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();

  const goToOrderDetail = () => {
    history.push('/order-detail');
    modal.current?.dismiss();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader
        style={{
          background: `url(${Burger})`,
          backgroundSize: 'cover',
          height: '50%',
          backgroundRepeat: 'no-repeat',
        }}
        className='ion-no-border'
      >
        <IonToolbar color='transparent'>
          <IonRow class='profile-toolbar product-list-toolbar'>
            <IonButton
              onClick={goBack}
              className='profile-back-btn product-back-btn'
            >
              <IonIcon color='danger' icon={chevronBackOutline} />
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonGrid
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 5,
          }}
        >
          <IonRow
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <IonButton
                className='red-btn'
                onClick={() => modal.current?.dismiss()}
              >
                <IonText color={'danger'}>Popular</IonText>
              </IonButton>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button className='detail-icon'>
                <IonIcon color='danger' icon={location} />
              </button>
              <button className='detail-icon'>
                <IonIcon icon={heart} />
              </button>
            </div>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText style={{ fontSize: 28 }}>
                Chicken Burger <br /> Promo Pack
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
                color={'medium'}
              >
                <IonIcon color='warning' icon={star} />
                4,8 Rating
              </IonText>
            </IonCol>
            <IonCol>
              <IonText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
                color={'medium'}
              >
                <IonIcon color='danger' icon={bagCheckOutline} />
                2000+ Order
              </IonText>
            </IonCol>

            <IonText style={{ marginTop: 5 }}>
              Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
              aute elit nostrud culpa velit excepteur deserunt sunt. Velit non
              est cillum consequat cupidatat ex Lorem laboris labore aliqua ad
              duis eu laborum.
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className='ion-padding'>
        <IonButton
          onClick={goToOrderDetail}
          className='add-cart-btn'
          expand='block'
        >
          <b>Add To Cart</b>
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};
