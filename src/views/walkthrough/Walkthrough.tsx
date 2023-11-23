import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useHistory } from 'react-router';
import {
  arrowForwardOutline,
  chevronForwardOutline,
  mailUnreadOutline,
  personOutline,
  star,
} from 'ionicons/icons';
import RegisterModal from '../register-modal/RegisterModal';
import WalkthroughImg1 from '../../assets/images/walkthrough1.png';
import WalkthroughImg2 from '../../assets/images/walkthrough2.png';
import './Walkthrough.css';

export const Walkthrough: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const swiperData = [
    {
      title: 'Select the Favorities Menu',
      description:
        "Now eat well, don't leave the house,You can choose your favorite food only with one click",
      img: WalkthroughImg1,
    },
    {
      title: 'Good food at a cheap price',
      description: 'You can eat at expensive restaurants with affordable price',
      img: WalkthroughImg2,
    },
  ];

  const handleNextSlide = () => {
    if (swiper) {
      if (currentSlide === 1) {
        setShowModal(true);
      } else if (currentSlide === swiperData.length - 1) {
        history.push('/other-path');
      } else {
        swiper.slideNext();
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'></IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonGrid className='walkthrough-content'>
          <IonRow>
            <Swiper
              pagination={{
                el: '.swiper-custom-pagination',
                type: 'custom',
                clickable: true,
              }}
              style={{
                padding: 0,
              }}
              modules={[Pagination]}
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex);
              }}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
            >
              {swiperData.map((item, index) => (
                <SwiperSlide key={index}>
                  <IonRow>
                    <IonCol>
                      <IonImg
                        src={item.img}
                        alt='The Wisconsin State Capitol building in Madison, WI at night'
                      ></IonImg>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol style={{ textAlign: 'center' }}>
                      <IonText>
                        {' '}
                        <h1>{item.title}</h1>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol style={{ textAlign: 'center' }}>
                      <IonText color={'medium'} style={{ textAlign: 'center' }}>
                        {item.description}
                      </IonText>
                    </IonCol>
                  </IonRow>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonRow>
          <IonRow>
            <IonCol style={{ textAlign: 'center' }}>
              <IonButton
                size='large'
                className='walkthrough-btn'
                onClick={handleNextSlide}
              >
                Next
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                className='swiper-custom-pagination'
              >
                {swiperData.map((item, index) => (
                  <div
                    key={index}
                    style={{ background: 'rgb(245,0,18)' }}
                    className={`swiper-pagination-bullet ${
                      index === currentSlide
                        ? 'swiper-pagination-bullet-active'
                        : ''
                    }`}
                  ></div>
                ))}
              </div>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                className='swiper-custom-pagination'
              >
                <IonButton fill='clear' color={'dark'}>
                  Skip
                </IonButton>
                <IonButton fill='clear' color={'dark'}>
                  <IonIcon color='danger' icon={arrowForwardOutline} />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        {showModal && <RegisterModal closeModal={closeModal} />}
      </IonContent>
    </IonPage>
  );
};
