import { IonContent, IonGrid, IonPage, IonText } from '@ionic/react';
import { useEffect } from 'react';
import StartBike from '../../assets/images/start-bike.png';
import Pattern from '../../assets/images/Pattern.png';
import { useHistory } from 'react-router-dom';

const StartPage: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/walkthrough');
    }, 3000);
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <img
          alt='Pattern'
          src={Pattern}
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <IonGrid style={{ marginTop: 200 }} className='welcome'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='welcome-content'
          >
            <img
              style={{
                width: 300,
              }}
              src={StartBike}
              alt='img'
            />
            <IonText style={{ color: 'rgb(245,0,18)' }}>
              <h1 style={{ fontSize: 50 }}>
                <b>Food Runs</b>
              </h1>
            </IonText>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default StartPage;
