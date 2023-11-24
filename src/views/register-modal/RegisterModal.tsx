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
  IonInput,
  IonLabel,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import './RegisterModal.css';
import { logoGoogle } from 'ionicons/icons';
import { useHistory } from 'react-router';

interface ExampleProps {
  closeModal: () => void;
}

function Example({ closeModal }: ExampleProps) {
  const modal = useRef<HTMLIonModalElement>(null);

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);
  const [currentTab, setCurrentTab] = useState('sign-up');
  const history = useHistory();

  useEffect(() => {
    modal.current?.present();

    return () => {
      modal.current?.dismiss();
    };
  }, []);

  function dismiss() {
    setCanDismiss(false);
    setTimeout(() => {
      modal.current?.dismiss();
      closeModal();
    }, 300);
  }

  const navigateProfile = () => {
    history.push('/product-list');
    closeModal();
  };

  return (
    <IonModal
      ref={modal}
      // @ts-ignore
      cssClass={`modal-custom ${canDismiss ? '' : 'modal-hidden'}`}
      canDismiss={canDismiss}
      presentingElement={presentingElement}
      animation='ios-transition'
    >
      <IonHeader>
        <IonToolbar class='modal-toolbar' color={'transparent'}>
          <div
            onClick={() => dismiss()}
            style={{
              width: 58,
              padding: 5,
              margin: '0 auto',
              borderRadius: 10,
              backgroundColor: 'rgb(255,240,240)',
            }}
          ></div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment
          value={currentTab}
          // @ts-ignore
          onIonChange={(e) => setCurrentTab(e.detail.value!)}
          className='segment-active'
        >
          <IonSegmentButton value='sign-up'>
            <IonLabel>Create Account</IonLabel>
            <div className='segment-indicator'></div>
          </IonSegmentButton>
          <IonSegmentButton value='login'>
            <IonLabel>Login</IonLabel>
            <div className='segment-indicator'></div>
          </IonSegmentButton>
        </IonSegment>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '80%',
          }}
        >
          {(currentTab === 'sign-up' || currentTab === 'login') && (
            <div>
              <IonItem lines='none'>
                <IonLabel>
                  {currentTab === 'sign-up' ? 'Full Name' : 'Email address'}
                </IonLabel>
              </IonItem>
              <IonItem lines='none'>
                <input
                  placeholder={
                    currentTab === 'sign-up' ? 'Full Name' : 'Email Address'
                  }
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '8px',
                    border: '1px solid rgb(218, 218, 218)',
                    padding: '12px',
                    boxSizing: 'border-box',
                  }}
                  type={currentTab === 'sign-up' ? 'text' : 'email'}
                />
              </IonItem>
              {currentTab === 'sign-up' && (
                <>
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
                </>
              )}
              {currentTab === 'login' && (
                <>
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
                </>
              )}
            </div>
          )}
          <div>
            <IonRow>
              <IonCol style={{ textAlign: 'center' }}>
                <IonButton
                  onClick={navigateProfile}
                  expand='block'
                  size='large'
                  className='sign-up-btn'
                >
                  <b>
                    <IonText>
                      {currentTab === 'sign-up' ? 'Sign up' : 'Login'}
                    </IonText>
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
                    <IonText>{`${
                      currentTab === 'sign-up' ? 'Sign up' : 'Login'
                    } with Google`}</IonText>
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
