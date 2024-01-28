import { View, Text, StatusBar, SafeAreaView, TextInput, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../../components/shared/Navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const StoreFormScreen = ({ route, navigation }) => {

    const { title, imgUrl } = route.params;

    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className="flex-1 bg-[#2b5c8f]">
                <StatusBar style="dark" />
                <View className="mb-2">
                    <Navbar />
                </View>
                <View className="px-3 bg-white mt-3 p-1 flex-row justify-center items-center">
                    <Image
                        source={imgUrl}
                        resizeMode='contain'
                        style={{ width: wp(16), height: wp(15) }}
                    />
                    <Text style={{ fontFamily: 'poppins-semibold' }} className="text-3xl text-gray-700 p-3 mt-5">
                        {title}
                    </Text>
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
                                        Company Name :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the company name*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ actionTaken: text })}
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
                                        placeholder='Enter the mobile number*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ actionTaken: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>


                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Company Specifications :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the company specifications*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ clientReview: text })}
                                        className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'
                                        multiline

                                    />
                                </View>

                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        Map URL :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the company location *'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ actionTaken: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>

                                <View className="py-4">
                                    <TouchableOpacity className="w-full  bg-[#2b5c8f] p-3 rounded-md text-center" onPress={handleSubmit}>
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

export default StoreFormScreen