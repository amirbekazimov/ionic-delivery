import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, chatbubbleEllipsesOutline, home, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import { Walkthrough } from './views/walkthrough/Walkthrough';
import { Profile } from './views/profile/Profile';
import { ProductDetail } from './views/product-detail/ProductDetail';
import { OrderDetail } from './views/order-detail/OrderDetail';
import { Complete } from './views/complete/Complete';
import { Map } from './views/map/Map';
import { Chat } from './views/chat/Chat';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ProductList } from './views/product-list/ProductList';
import StartPage from './views/start-page/StartPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/tab1'>
            <Tab1 />
          </Route>
          <Route exact path='/tab2'>
            <Tab2 />
          </Route>
          <Route path='/tab3'>
            <Tab3 />
          </Route>
          <Route path='/product-list'>
            <ProductList />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>

          <Route exact path='/'>
            <Redirect to='/welcome' />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color={'white'} style={{ borderTop: 'none' }} slot='bottom'>
          <IonTabButton tab='tab1' href='/product-list'>
            <IonIcon color='danger' aria-hidden='true' icon={home} />
          </IonTabButton>
          <IonTabButton tab='tab2' href='/profile'>
            <IonIcon color='danger' aria-hidden='true' icon={person} />
          </IonTabButton>
          <IonTabButton tab='tab3' href='/order-detail'>
            <IonIcon color='danger' aria-hidden='true' icon={cart} />
          </IonTabButton>
          <IonTabButton tab='tab4' href='/chat'>
            <IonIcon
              color='danger'
              aria-hidden='true'
              icon={chatbubbleEllipsesOutline}
            />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <div>
        <Route path='/welcome'>
          <StartPage />
        </Route>
        <Route path='/product-detail'>
          <ProductDetail />
        </Route>
        <Route path='/order-detail'>
          <OrderDetail />
        </Route>
        <Route path='/complete'>
          <Complete />
        </Route>
        <Route path='/walkthrough'>
          <Walkthrough />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </div>
    </IonReactRouter>
  </IonApp>
);

export default App;
