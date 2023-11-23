import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonCheckbox,
  IonInput,
  IonCol,
  IonLabel,
  IonRow,
  IonIcon,
  IonText,
} from '@ionic/react';
import './RegisterModal.css';
import { logoGoogle } from 'ionicons/icons';

interface ExampleProps {
  closeModal: () => void;
}

function Example({ closeModal }: ExampleProps) {
  const modal = useRef<HTMLIonModalElement>(null);

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  useEffect(() => {
    modal.current?.present();

    return () => {
      modal.current?.dismiss();
    };
  }, []);

  function dismiss() {
    setCanDismiss(false);

    // Ждем некоторое время перед вызовом closeModal
    setTimeout(() => {
      modal.current?.dismiss();
      closeModal();
    }, 300); // Задайте тот же период, что и в CSS анимации
  }

  return (
    <IonModal
      ref={modal}
      //   cssClass='modal-custom' // Добавьте свой класс стилей
      cssClass={`modal-custom ${canDismiss ? '' : 'modal-hidden'}`}
      canDismiss={canDismiss}
      presentingElement={presentingElement}
      animation='ios-transition'
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '80%',
          }}
        >
          <div>
            <IonItem lines='none'>
              <IonLabel>Full Name</IonLabel>
            </IonItem>
            <IonItem lines='none'>
              <input
                placeholder='Full Name'
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid rgb(218, 218, 218)',
                  padding: '12px',
                  boxSizing: 'border-box',
                }}
                type='text'
              />
            </IonItem>
            <IonItem lines='none'>
              <IonLabel>Email address</IonLabel>
            </IonItem>
            <IonItem lines='none'>
              <input
                placeholder='Email Address'
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid rgb(218, 218, 218)',
                  padding: '12px',
                  boxSizing: 'border-box',
                }}
                type='email'
              />
            </IonItem>
            <IonItem lines='none'>
              <IonLabel>Password</IonLabel>
            </IonItem>
            <IonItem lines='none'>
              <input
                placeholder='Password'
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid rgb(218, 218, 218)',
                  padding: '12px',
                  boxSizing: 'border-box',
                }}
                type='password'
              />
            </IonItem>
          </div>
          <div>
            <IonRow>
              <IonCol style={{ textAlign: 'center' }}>
                <IonButton expand='block' size='large' className='sign-up-btn'>
                  <b>
                    <IonText>Sign up</IonText>
                  </b>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style={{ textAlign: 'center' }}>
                <IonButton
                  color={'light'}
                  expand='block'
                  size='large'
                  className='sign-up-btn'
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <IonIcon size='' color='danger' icon={logoGoogle} />
                    <IonText>Sign up with Google</IonText>
                    <b></b>
                  </div>
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
}

export default Example;
