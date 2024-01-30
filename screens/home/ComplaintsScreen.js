import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Pressable, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'
import { CameraIcon } from 'react-native-heroicons/outline';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as ImagePicker from "expo-image-picker";
import { FIRESTORE_DB, store } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import emailjs from "@emailjs/browser";
import CryptoJS from 'react-native-crypto-js';


const ComplaintsScreen = () => {

    const [loading, setLoading] = useState(false)
    const [pic, setPic] = useState(null);
    const [blobImage, setBlobImage] = useState(null);
    const [metadata, setMetaData] = useState(null);

    const complaintsRef = collection(FIRESTORE_DB, "complaints");
    const storageRef = ref(store, 'Images/' + Date.now());

    const encryptMessage = (message, key) => {
        const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
        return encryptedMessage;
    };





    const [state, setState] = useState({
        userName: "",
        mapUrl: "",
        field: "",
        description: "",
        complaintUrl: "",
        status: false,
    })

    const { userName, mapUrl, field, description, complaintUrl } = state;

    const clearInputs = () => {
        setState({
            userName: '',
            mapUrl: '',
            field: '',
            description: '',
            complaintUrl: '',
            status: false,
        });
        setPic(null);
        setBlobImage(null);
        setMetaData(null);
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


    const handleSubmit = async () => {
        try {
            setLoading(true);

            if (blobImage && metadata) {
                const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
                await uploadTask;

                const downloadURL = await getDownloadURL(storageRef);
                console.log('File uploaded successfully. Download URL:', downloadURL);

                const docRef = await addDoc(complaintsRef, {
                    userName,
                    mapUrl,
                    field,
                    description: encryptMessage(description, 'nambakovai'),
                    complaintUrl: downloadURL,
                    status: false,
                });

                const emailResult = await emailjs.send(
                    'service_76hhcpq',
                    'template_jz0h6xk',
                    {
                        from_name: userName,
                        to_name: "Akash G",
                        from_email: "727721euee006@skcet.ac.in",
                        to_email: "ganeshakas2004@gmail.com",
                        message: description,
                    },
                    '6ORizV0HXZbbdxisK'
                );
                setLoading(false);
                alert("Complaint registered successfully!");
                 clearInputs();
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert("Ahh, something went wrong. Please try again.");
        }
    };

    const setCombinedState = (newstate) => {
        setState((prevState) => ({ ...prevState, ...newstate }))
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
            <View className="flex-1 bg-white ">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-3">
                    Register your Complaints !
                </Text>
                <ScrollView className=" px-4 bg-white  space-y-5  mt-4  flex-1 ">
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
                                placeholder='Enter the user name'
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
                                Map url :
                            </Text>
                            <TextInput
                                style={{ fontFamily: 'poppins-regular' }}
                                placeholder='Enter the Map Url'
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
                                Field :
                            </Text>
                            <TextInput
                                style={{ fontFamily: 'poppins-regular' }}
                                placeholder='Enter the field'
                                placeholderTextColor={'gray'}
                                onChangeText={(text) => setCombinedState({ field: text })}
                                className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                textAlignVertical='top'
                            />
                        </View>

                        <View>
                            <Text
                                style={{ fontFamily: 'poppins-semibold' }}
                                className="px-2 text-lg text-gray-700 py-2"
                            >
                                ATTACH IMAGES :
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

                                onChangeText={(text) => setCombinedState({ description: text })}
                                className=" bg-white h-[250px] rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                                textAlignVertical='top'
                                multiline
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
                    </Pressable>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default ComplaintsScreen

