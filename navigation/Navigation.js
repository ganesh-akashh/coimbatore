import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import ServicesScreen from '../screens/features/ServicesScreen';
import AddStoreScreen from '../screens/store/AddStoreScreen';
import ChatScreen from '../screens/ChatScreen';
import RobotScreen from '../screens/RobotScreen';
import { onAuthStateChanged } from "firebase/auth"
import {
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  ShoppingBagIcon,
  MicrophoneIcon
} from 'react-native-heroicons/outline';
import HomeNavigation from '../components/shared/HomeNavigation';
import StoreFormScreen from '../screens/store/StoreFormScreen';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import AddMapScreen from '../screens/store/AddMapScreen';
import ServiceTypeScreen from '../screens/features/ServiceTypeScreen';
import AddDonationScreen from '../screens/store/AddDonationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AddStoreStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={AddStoreScreen} />
      <Stack.Screen name='StoreFormScreen' options={{ headerShown: false }} component={StoreFormScreen} />
      <Stack.Screen name='MapFormScreen' options={{ headerShown: false }} component={AddMapScreen} />
      <Stack.Screen name='DonationFormScreen' options={{ headerShown: false }} component={AddDonationScreen} />
    </Stack.Navigator>
  );
};

const ServiceStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' options={{ headerShown: false }} component={ServicesScreen} />
      <Stack.Screen name='ServiceTypeScreen' options={{ headerShown: false }} component={ServiceTypeScreen} />
    </Stack.Navigator>
  )
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />;
          } else if (route.name === 'Services') {
            return <BriefcaseIcon size={size} color={color} />;
          } else if (route.name === 'Chat') {
            return <ChatBubbleLeftIcon size={size} color={color} />;
          } else if (route.name === 'AddStore') {
            return <ShoppingBagIcon size={size} color={color} />;
          } else if (route.name === "Community") {
            return <MicrophoneIcon size={size} color={color} />
          }
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeNavigation} />
      <Tab.Screen name='Services' options={{ headerShown: false }} component={ServiceStack} />
      <Tab.Screen name='Chat' options={{ headerShown: false }} component={RobotScreen} />
      <Tab.Screen name='Community' options={{ headerShown: false }} component={ChatScreen} />
      <Tab.Screen name='AddStore' options={{ headerShown: false }} component={AddStoreStack} />
    </Tab.Navigator>
  );
};

const Navigation = () => {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            console.log(user);
          }
        })

        return () => unsubscribe();
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

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
