import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Pressable, KeyboardAvoidingView } from 'react-native';
import React from 'react'

const ComplaintsScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="flex-1 bg-white ">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-3">
                    Regsister your Complaints !
                </Text>

                <ScrollView className=" px-4 bg-white  space-y-5    flex-1 ">
                    <Pressable className="flex space-y-2 justify-center mb-5">
                        <View>
                            <Text
                                style={{ fontFamily: 'poppins-semibold' }}
                                className="px-2 text-lg text-gray-700 py-2"
                            >
                                Your Name :
                            </Text>
                            <TextInput
                                style={{ fontFamily: 'poppins-regular' }}
                                placeholder='Enter the user name*'
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
                                placeholder='Enter the user name*'
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
                                Field :
                            </Text>
                            <TextInput
                                style={{ fontFamily: 'poppins-regular' }}
                                placeholder='Enter the field*'
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
                                Description :
                            </Text>
                            <TextInput
                                style={{ fontFamily: 'poppins-regular' }}
                                placeholder='Enter the complaint specifications*'
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => setCombinedState({ specifications: text })}
                                className=" bg-white h-[150px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                textAlignVertical='top'
                                multiline
                            />
                        </View>
                    </Pressable>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default ComplaintsScreen