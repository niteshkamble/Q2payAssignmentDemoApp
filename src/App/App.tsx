import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Home from '../screens/Home';
import {ProductsProvider} from './AppState';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetail from '../screens/ProductDetail';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <ProductsProvider>
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor:'#FFF'}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {backgroundColor: '#4CAF50'},
              title: 'Products',
              headerTitleStyle: {color: '#f2f2f2'},
            }}
          />
          <Stack.Screen
            name="Product Details"
            component={ProductDetail}
            options={{
              headerStyle: {backgroundColor: '#4CAF50'},
              title: 'Product Details',
              headerTitleStyle: {color: '#f2f2f2'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </ProductsProvider>
  );
};

export default App;
