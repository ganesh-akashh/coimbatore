import { View, Text, StatusBar, SafeAreaView, TextInput, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/Navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from "expo-image-picker";
import { CameraIcon } from 'react-native-heroicons/outline';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { store, FIRESTORE_DB } from "../../firebase"
import { addDoc, collection } from 'firebase/firestore';

const StoreFormScreen = ({ route, navigation }) => {

    const { title, imgUrl } = route.params;

    const storageRef = ref(store, 'Images/' + Date.now());

    const storesRef = collection(FIRESTORE_DB, "stores");




    const [loading, setLoading] = useState(false)
    const [pic, setPic] = useState(null);
    const [blobImage, setBlobImage] = useState(null);
    const [metadata, setMetaData] = useState(null);

    const [state, setState] = useState({
        companyName: "",
        mobileNumber: "",
        shopImageUrl: "",
        specifications: "",
        type: title,
        mapUrl: "",
    })

    const { companyName, mapUrl, shopImageUrl, mobileNumber, specifications, type } = state



    const setCombinedState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }))
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (blobImage && metadata) {
                const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
                await uploadTask;
                const downloadURL = await getDownloadURL(storageRef);
                console.log('File uploaded successfully. Download URL:', downloadURL);
                const docRef = await addDoc(storesRef, {
                    companyName,
                    mobileNumber,
                    type,
                    specifications,
                    mapUrl,
                    shopImageUrl: downloadURL,
                })
                setLoading(false);
                navigation.goBack();
            }

        } catch (uploadError) {
            console.error('Error during file upload:', uploadError);
        }
    };


    const uploadImage = async () => {
        try {
            let result = {};
            await ImagePicker.
                requestCameraPermissionsAsync();
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [16, 16],
                quality: 1,
            });

            if (!result.canceled) {
                setPic(result.assets[0].uri);
            }
        }
        catch (err) {
            console.log("Error in image picker");
        }
    }

    useEffect(() => {
        const uploadImageToServer = async () => {
            if (pic) {
                try {
                    const response = await fetch(pic);
                    const blobImage = await response.blob();
                    const metadata = {
                        contentType: 'image/jpeg',
                    };
                    setBlobImage(blobImage)
                    setMetaData(metadata)
                } catch (error) {
                    console.log('Error uploading image to server', error);
                }
            }
        };

        uploadImageToServer();
    }, [pic]);




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
                                        onChangeText={(text) => setCombinedState({ companyName: text })}
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
                                        Company Specifications :
                                    </Text>
                                    <TextInput
                                        style={{ fontFamily: 'poppins-regular' }}
                                        placeholder='Enter the company specifications*'
                                        placeholderTextColor={'gray'}
                                        onChangeText={(text) => setCombinedState({ specifications: text })}
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
                                        onChangeText={(text) => setCombinedState({ mapUrl: text })}
                                        className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                        textAlignVertical='top'

                                    />
                                </View>

                                <View>
                                    <Text
                                        style={{ fontFamily: 'poppins-semibold' }}
                                        className="px-2 text-lg text-gray-700 py-2"
                                    >
                                        SHOP IMAGES :
                                    </Text>
                                    <TouchableOpacity
                                        className=" h-[250px] flex justify-center items-center rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] bg-white p-4"
                                        onPress={uploadImage}
                                    >
                                        {pic ?
                                            <Image
                                                source={{ uri: pic }}
                                                style={{ flex: 1, width: '100%', height: '100%', resizeMode: "contain" }}
                                            /> :
                                            <View className="flex justify-center items-center">

                                                <CameraIcon color="gray" />
                                                <Text
                                                    style={{ fontFamily: 'poppins-regular' }}
                                                    className="px-2 text-lg text-gray-700 py-2"
                                                >
                                                    Click to add your image
                                                </Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
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