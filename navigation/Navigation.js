import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import AddStoreScreen from '../screens/AddStoreScreen';
import ChatScreen from '../screens/ChatScreen';

import {
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import HomeNavigation from '../components/shared/HomeNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />;
          } else if (route.name === 'Services') {
            return <BriefcaseIcon size={size} color={color} />;
          } else if (route.name === 'Chat') {
            return <ChatBubbleLeftIcon size={size} color={color} />;
          } else if (route.name === 'AddStore') {
            return <ShoppingBagIcon size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeNavigation} />
      <Tab.Screen name='Services' options={{ headerShown: false }} component={ServicesScreen} />
      <Tab.Screen name='Chat' options={{ headerShown: false }} component={ChatScreen} />
      <Tab.Screen name='AddStore' options={{ headerShown: false }} component={AddStoreScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Main" options={{ headerShown: false }} component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
