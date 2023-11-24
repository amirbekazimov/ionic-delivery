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
  IonImg,
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
  addCircle,
  caretForwardOutline,
  chevronBackOutline,
  location,
  notificationsOutline,
  star,
} from 'ionicons/icons';
import './ProductList.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductImg from '../../assets/images/walkthrough1.png';
import Burger from '../../assets/images/burger.png';
import MiniBurger from '../../assets/images/mini-burger.png';
import CheeseBurger from '../../assets/images/cheese-burger.png';
import Pizza from '../../assets/images/pizza.png';
import PizzaMeat from '../../assets/images/pizza-x.png';
import HotDog from '../../assets/images/hotdogimg.png';

export const ProductList: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('burger');
  const history = useHistory();

  const swiperData = [
    {
      id: 1,
      img: ProductImg,
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

  const productsData = [
    {
      category: 'burger',
      rating: 3.8,
      imageSrc: MiniBurger,
      altText: 'Burger img error',
      title: 'Chicken burger',
      description: '100 gr chicken + tomato + cheese Lettuce',
      price: 20.0,
    },
    {
      category: 'burger',
      rating: 4.5,
      imageSrc: CheeseBurger,
      altText: 'Burger img error',
      title: 'Chese burger',
      description: '100 gr meat + onion + tomato + Lettuce cheese',
      price: 15.0,
    },
    {
      category: 'pizza',
      rating: 4.5,
      imageSrc: PizzaMeat,
      altText: 'Pizza img error',
      title: 'Pizza meat',
      description: '100 gr meat + onion + tomato + Lettuce cheese',
      price: 20.0,
    },
    {
      category: 'hot-dog',
      rating: 4.5,
      imageSrc: HotDog,
      altText: 'Hot-dog img error',
      title: 'Hot-dog full',
      description: '100 gr meat + onion + tomato + Lettuce cheese',
      price: 20.0,
    },
  ];

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productsData.filter((product) =>
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

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
                    ).toString();
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
              value={selectedCategory}
              className='segment-active product-segment '
              style={{ display: 'flex', gap: 8, overflowX: 'auto' }}
              onIonChange={(e) => handleCategoryChange(e.detail.value)}
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
              <IonSegmentButton style={{ minWidth: '131px' }} value='free'>
                <IonLabel>Free</IonLabel>
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
        <IonGrid>
          <IonRow>
            <IonCol
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {filteredProducts.map((product, index) => (
                <div
                  onClick={() => history.push('/product-detail')}
                  key={index}
                  style={{
                    display: 'flex',
                    width: 165,
                    height: 245,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                    gap: '22px',
                    alignItems: 'center',
                    padding: '12px',
                  }}
                >
                  <IonCol style={{ textAlign: 'start', alignItems: 'start' }}>
                    <IonText
                      style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      <IonIcon color='warning' icon={star} />
                      {product.rating}
                    </IonText>
                  </IonCol>
                  <IonImg
                    style={{
                      height: '300px',
                      width: '70px',
                    }}
                    src={product.imageSrc}
                    alt={product.altText}
                  />
                  <div>
                    <IonText>
                      <b>{product.title}</b>
                    </IonText>
                    <br />
                    <IonText color={'medium'}>{product.description}</IonText>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <IonText style={{ fontSize: 16, color: 'rgb(245,0,18)' }}>
                      <b>${product.price.toFixed(2)}</b>
                    </IonText>
                    <IonIcon
                      style={{ color: 'rgb(245,0,18)', fontSize: 24 }}
                      icon={addCircle}
                    />
                  </div>
                </div>
              ))}
            </IonCol>
          </IonRow>
          <IonRow
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <IonCol>
              <IonText style={{ fontSize: 16 }}>
                <b>Popular Meal Menu</b>
              </IonText>
            </IonCol>
            <IonCol
              size='auto'
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <IonText color={'medium'} style={{ fontSize: 16 }}>
                See All
              </IonText>
              <IonIcon color='medium' icon={caretForwardOutline} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                  alignItems: 'center',
                  borderRadius: 7,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    padding: 12,
                    paddingRight: 12,
                  }}
                >
                  <IonImg style={{ width: 75 }} src={Pizza}></IonImg>
                  <IonText
                    color={'dark'}
                    class='ion-text-start'
                    style={{ lineHeight: 1.5 }}
                  >
                    <b>Pepper Pizza</b>
                    <br />
                    <IonText color={'medium'}>5kg box of Pizza</IonText>
                  </IonText>
                </div>
                <IonText
                  style={{
                    fontSize: '22px',
                    marginRight: 12,
                    color: 'rgb(245,0,18)',
                  }}
                >
                  <b>$15</b>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
