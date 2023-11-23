import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
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
  notificationsOutline,
} from 'ionicons/icons';
import './ProductList.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductImg from '../../assets/images/walkthrough1.png';
import Burger from '../../assets/images/burger.png';

export const ProductList: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  const swiperData = [
    {
      id: 1,
      img: Burger,
      title: 'Special Offer for March',
      description: 'We are here with the best desserts in town.',
    },
    {
      id: 2,
      img: ProductImg,
      title: 'Special Offer for March',
      description: 'We are here with the best desserts in town.',
    },
    {
      id: 3,
      img: ProductImg,
      title: 'Special Offer for March',
      description: 'We are here with the best desserts in town.',
    },
  ];

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <IonRow class='profile-toolbar product-list-toolbar'>
            <IonButton className='profile-back-btn'>
              <IonIcon color='danger' icon={chevronBackOutline} />
            </IonButton>
            <IonText
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                fontSize: 16,
              }}
            >
              <IonIcon color='danger' icon={location} />
              Freedom way, Lekki phase
            </IonText>
            <IonButton className='profile-back-btn'>
              <IonIcon color='danger' icon={notificationsOutline} />
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <input
          placeholder={'Search'}
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

        <IonGrid>
          <IonRow>
            <IonCol>
              <Swiper
                style={{ marginTop: 16 }}
                autoplay={{
                  delay: 2000, // Adjust the delay as needed
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.swiper-custom-pagination',
                  type: 'custom',
                  clickable: true,
                  renderCustom: (swiper, current, total) => {
                    return (
                      <div className='swiper-custom-pagination'>
                        {current} / {total}
                      </div>
                    );
                  },
                }}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.activeIndex);
                }}
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                }}
              >
                {swiperData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div
                        className='card-background'
                        style={{
                          background: `linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(255, 180, 180, 1))`,
                          display: 'flex',
                          flexDirection: 'row',
                          borderRadius: 10,
                        }}
                      >
                        <IonCardHeader style={{ flex: '1', padding: '16px' }}>
                          <IonButton
                            color={'light'}
                            style={{ width: '74px', height: '33px' }}
                            size='small'
                          >
                            <IonText color={'danger'}>Buy Now</IonText>
                          </IonButton>
                          <IonCardSubtitle color={'light'}>
                            {item.description}
                          </IonCardSubtitle>
                          <IonCardTitle
                            style={{ fontSize: 22 }}
                            color={'light'}
                          >
                            {item.title}
                          </IonCardTitle>
                        </IonCardHeader>
                        <div style={{ flex: '1' }}>
                          <img
                            src={item.img}
                            alt={`Product ${item.id}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 6,
                  marginTop: 16,
                }}
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
          <IonRow style={{ marginTop: 16 }}>
            <IonSegment
              scrollable={true}
              value={'burger'}
              className='segment-active product-segment '
              style={{ display: 'flex', gap: 8, overflowX: 'auto' }}
            >
              <IonSegmentButton style={{ minWidth: '131px' }} value='burger'>
                <IonLabel>Burger</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton style={{ minWidth: '131px' }} value='pizza'>
                <IonLabel>Pizza</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton style={{ minWidth: '131px' }} value='hot-dog'>
                <IonLabel>Hot Dog</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton style={{ minWidth: '131px' }} value='hot-dogas'>
                <IonLabel>Hot Dog</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                style={{ minWidth: '131px' }}
                value='hot-dogaasds'
              >
                <IonLabel>Hot Dog</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
