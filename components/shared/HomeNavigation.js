import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketPriceScreen from '../../screens/home/MarketPriceScreen';
import Navbar from './Navbar';
import HomeScreen from '../../screens/HomeScreen';
import NewsScreen from '../../screens/home/NewsScreen';
import JobScreen from '../../screens/home/JobScreen';

const Tab = createMaterialTopTabNavigator();



const HomeNavigation = () => {

    

    return (
        <SafeAreaView className="flex-1 bg-[#2b5c8f]">
            <StatusBar style="dark" />
            <Navbar />
            <View className="mt-3" />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#ffff',
                    tabBarLabelStyle: { fontSize: 14, fontFamily: 'poppins-medium', backgroundColor: "#2b5c8f", marginTop: 5, textTransform: "none" },
                    tabBarScrollEnabled: true,
                    swipeEnabled: false,
                    tabBarStyle: { backgroundColor: "#2b5c8f" },
                    tabBarAndroidRipple: { borderless: false },
                    tabBarIndicator: false,
                    tabBarIndicatorStyle: { backgroundColor: "white" },
                    tabBarItemStyle: { width: "auto" },
                    tabBarGap: 5,
                    lazy:true
                }}
            >
                <Tab.Screen name="Dashboard" component={HomeScreen} />
                <Tab.Screen name="News" component={NewsScreen} />
                <Tab.Screen name="Jobs" component={JobScreen} />
                <Tab.Screen name="Events" component={MarketPriceScreen} />
                <Tab.Screen name="Market Price" component={MarketPriceScreen} />
                <Tab.Screen name="Maps" component={MarketPriceScreen} />
                <Tab.Screen name="Movies" component={MarketPriceScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default HomeNavigation;
