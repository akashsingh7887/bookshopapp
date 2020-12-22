import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Navigators/_MainNavigator';
import {Provider} from 'react-redux';
import store from './src/libs/redux/store/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <AppStack />
        {/* </PersistGate> */}
      </Provider>
    </NavigationContainer>
  );
};

export default App;
