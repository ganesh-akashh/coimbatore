import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth } from "../firebase"

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const marginValue = screenWidth * 0.2;

    const handleSubmit = async () => {
        navigation.navigate("SignIn");
    }

    return (
        <LinearGradient className="flex-1" colors={["#06aef4", "#256eb9"]}>
            <View className="flex-[0.45] justify-center items-center" style={{ marginTop: marginValue }}>
                <Image
                    source={require('../assets/images/welcome.jpeg')}
                    style={{ width: 350, height: 270 }}
                    className="rounded-lg rotate-3"
                />
            </View>

            <View className="flex-[0.5] space-y-5 justify-between  px-2 py-1">
                <View >
                    <Text
                        style={{ fontFamily: 'lobster-regular' }}
                        className="text-white text-5xl p-2"
                    >
                        Coimbatore Transformed:
                    </Text>
                    <Text
                        style={{ fontFamily: 'poppins-regular' }}
                        className="text-white text-5xl px-1 pt-2 pb-2"
                    >
                        Tech at Your Fingertips
                    </Text>
                    <Text
                        style={{ fontFamily: 'poppins-medium' }}
                        className="text-white text-base px-3 py-2"
                    >
                        Discover the beauty and culture of Coimbatore. Experience the best places, events, and more!
                    </Text>
                </View>
                <View className="p-2 mb-4">
                    <TouchableOpacity className="px-2 py-3 rounded-xl bg-yellow-300" onPress={handleSubmit}>
                        <Text
                            style={{ fontFamily: 'poppins-semibold' }}
                            className="text-gray-800 text-center text-base"
                        >Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default WelcomeScreen;
