import { View, Text, TouchableWithoutFeedback, TextInput, Image, SafeAreaView, KeyboardAvoidingView, Keyboard, Platform, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Navbar from '../../components/shared/Navbar'
import { useState } from 'react';
import { FIRESTORE_DB } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const AddMapScreen = ({ route, navigation }) => {



    const locationRef = collection(FIRESTORE_DB, "location");

    const { title, imgUrl } = route.params;
    const [loading, setLoading] = useState(false)

    const [state, setState] = useState({
        userName: "",
        mobileNumber: "",
        longitude: "",
        latitude: "",
        specifications: ""
    })



    const { userName, mobileNumber, latitude, longitude, specifications } = state;



    const setCombinedState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }));
    }



    const handleSubmit = async () => {

        try {
            setLoading(true);
            const docRef = await addDoc(locationRef, {
                userName,
                mobileNumber,
                longitude,
                latitude,
                specifications
            });
            setLoading(false)
            navigation.goBack();

        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className="flex-1 bg-[#2b5c8f]">
                <StatusBar style="dark" />
                <View className="mb-2">
                    <Navbar />
                </View>
                <View className="px-3 bg-white mt-3 p-1 ">
                    <View className="flex-row  justify-center items-center">
                        <Image
                            source={imgUrl}
                            resizeMode='contain'
                            style={{ width: wp(16), height: wp(15) }}
                        />
                        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-3xl text-gray-700 p-3 mt-5">
                            {title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'poppins-medium' }} className="text-base text-gray-700 p-3 mt-5">
                            Register your camera, pinpoint the details. Join us in making our community safer, one click at a time !
                        </Text>
                    </View>

                </View>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
                    <ScrollView className="flex-1 bg-[#F5F7F8]">
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                            <View className="mt-5  space-y-5 mx-4 ">
                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Your Name :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter your name*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ userName: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>
                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Mobile Number :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter your mobile number*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ mobileNumber: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>
                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Latitude :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the latitude*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ latitude: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>
                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Longitude :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the  Longitude*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ longitude: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>
                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Camera Specifications :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the camera specifications*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ specifications: text })}
                                        className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'
                                        multiline

                                    />
                                </View>
                                <View className="py-4">
                                    <TouchableOpacity className="w-full  bg-[#2b5c8f] p-3 rounded-md text-center" onPress={handleSubmit} >
                                        {loading ?
                                            <ActivityIndicator color="white" /> :
                                            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Submit</Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default AddMapScreen