import { View, Text, SafeAreaView, StatusBar, TextInput, Image, TouchableOpacity, ScrollView, Pressable, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/shared/Navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/outline'
import { dummyMessages } from '../../utils'
import { addDoc, collection, getDocs, query, where, serverTimestamp, onSnapshot, orderBy } from "firebase/firestore"
import { FIRESTORE_DB } from "../../firebase"
import CryptoJS from 'react-native-crypto-js';

const TextScreen = ({ route, navigation }) => {

    const [term, setTerm] = useState("");
    const [loading, setloading] = useState(false)
    const { type, imgUrl } = route.params;

    const encryptMessage = (message, key) => {
        const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
        return encryptedMessage;
    };

    const decryptMessage = (encryptedMessage, key) => {
        const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
        return decryptedMessage;
    };





    const [data, setData] = useState([]);


    const chatRef = collection(FIRESTORE_DB, "communities");


    useEffect(() => {
        const fetchQuery = async () => {
            try {
                setloading(true);
                const q = query(
                    chatRef,
                    where("type", "==", type),
                    orderBy("createdAt", "desc")
                );
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const newData = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    setData(newData);
                    setloading(false);
                    updateScrollView();
                });

                return () => unsubscribe();
            } catch (error) {
                console.log(error);
            }
        };

        fetchQuery();
    }, [type]);

    const updateScrollView = () => {
        setTimeout(() => {
            scrollViewRef?.current?.scrollToEnd({ animated: true });
        }, 200)
    }

    const addTextQuery = async () => {
        try {
            setloading(true);

            const docRef = await addDoc(chatRef, {
                text: encryptMessage(term, 'nambakovai'),
                type,
                createdAt: serverTimestamp(),
            })

            setloading(false)

        } catch (error) {
            console.log(error);
        }
    }



    const scrollViewRef = useRef();




    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className="flex-1  bg-[#2b5c8f]">
                <StatusBar style='light' />
                <View className="mb-5">
                    <Navbar />
                </View>
                <View className="flex-1 bg-[#f8f8f8]  px-3 ">
                    <View className="flex flex-row mt-4  items-center">
                        <Image
                            source={imgUrl}
                            resizeMode='contain'
                            style={{ width: wp(8), height: wp(8) }}
                        />
                        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-3 ">
                            Discuss the events !
                        </Text>
                    </View>
                    <View className="flex flex-row justify-between  items-center">
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder={"Type here ..."}
                            style={{ fontFamily: 'poppins-medium' }}
                            className=" border w-[80%] my-1 mx-3 px-4 py-3 rounded-lg"
                            onChangeText={(text) => setTerm(text)}
                            value={term}
                        />
                        {loading ?
                            <View className="mr-4 px-2 py-2 ">
                                <ActivityIndicator color="black" />
                            </View>
                            :
                            <TouchableOpacity
                                onPress={() => addTextQuery()}
                                className="bg-[#2b5c8f] mr-4 px-2 py-2 rounded-xl">
                                <ChatBubbleBottomCenterIcon color="white" />
                            </TouchableOpacity>
                        }
                    </View>
                    <View
                        style={{ height: hp(55) }}
                        className="bg-neutral-200 rounded-3xl p-4 mx-4 mt-5"
                    >
                        <ScrollView
                            ref={scrollViewRef}
                            showsVerticalScrollIndicator={false}
                        >
                            <Pressable className="space-y-4">
                                {data.map((message, index) => {
                                    return (
                                        <View key={index} className="flex-row justify-end">
                                            <View
                                                style={{ width: wp(70) }}
                                                className="bg-[#2b5c8f] rounded-xl p-2.5 rounded-tr-none"
                                            >
                                                <Text className="text-white" style={{ fontFamily: 'poppins-regular' }}> {decryptMessage(message.text, 'nambakovai')}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default TextScreen