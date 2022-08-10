import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import LoginScreen from './src/screens/LoginScreen';
import Tabs from './src/screens/TabBar';
import WishListScreen from './src/screens/WishListScreen';
import RegisterStack from './src/stacks/RegisterScreenStack';
import NotificationScreen from './src/screens/NotificationScreen';
import { useColorScheme } from 'react-native';
import ProductDetails from './src/screens/ProductDetails';


const DarkMode = {
  "colors": {
    "background": "#181A20",
    "border": '#d7d0d0',
    "card": "rgb(18, 18, 18)",
    "notification": "rgb(255, 69, 58)",
    "primary": "rgb(10, 132, 255)",
    "text": "rgb(229, 229, 231)",
    "shadowColor": '#181A20',
    "componentBackground": '#35383F'
  },
  "dark": true
}

const LightMode = {
  colors: {
    background: "white",
    border: "rgb(216, 216, 216)",
    card: "rgb(255, 255, 255)",
    notification: "rgb(255, 59, 48)",
    primary: "rgb(0, 122, 255)",
    text: "rgb(28, 28, 30)",
    shadowColor: '#0e0e0e',
    componentBackground: '#efefef',
  },
  dark: false
}


const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (

    <NavigationContainer theme={scheme === 'light' ? LightMode : DarkMode}>
      <Stack.Navigator>

        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={commonOptions}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={commonOptions}
        />
        <Stack.Screen
          name="RegisterStack"
          component={RegisterStack}
          options={commonOptions}
        />
        <Stack.Screen name="Tabs" component={Tabs} options={commonOptions} />

        <Stack.Screen
          name="WishList"
          component={WishListScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
        />
        <Stack.Screen
          name="Detail"
          component={ProductDetails}
          options={{
            presentation: 'fullScreenModal',
            animation: 'fade',
            headerShown: false,
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
        />

        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const commonOptions = {
  headerShown: false,
  animationEnabled: false,
}

export default () => {
  return (
    <App />
  )
};
