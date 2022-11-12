import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import AppNavigator from './src/AppNavigator'
import { persister, store } from './src/store'
import { useFonts } from 'expo-font';




const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require("./src/assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Regular': require("./src/assets/fonts/Poppins-Regular.ttf"),
  });

  return (
    <PersistGate loading={null} persistor={persister}>
      <Provider {...{ store }}>
        <StatusBar translucent={true} />
        {
          fontsLoaded &&
          <AppNavigator />
        }
      </Provider>
    </PersistGate>


  );
}

export default App;
