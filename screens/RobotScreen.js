import { SafeAreaView, StatusBar, Keyboard, View, Image, Text, TextInput, ScrollView, Pressable, TouchableOpacity, Alert, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { dummyMessages } from "../utils/index"

import { apiCall } from '../utils/openAi'

const RobotScreen = () => {

  const [messages, setMessages] = useState(dummyMessages);
  const [term, setTerm] = useState("")
  const [loading, setLoading] = useState(false)

  const scrollViewRef = useRef();



  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 200)
  }

  const handleSubmit = async () => {
    try {
      Keyboard.dismiss();
      setTerm("")
      setLoading(true)
      fetchResponse();
    } catch (error) {
      console.log(error);
    }
  }

  const fetchResponse = () => {
    if (term.trim().length > 0) {
      let newMessages = [...messages];
      newMessages.push({ role: 'user', content: term.trim() });
      setMessages([...newMessages]);

      apiCall(term.trim(), newMessages).then(res => {
        console.log("Got Api Data");
        if (res.success) {
          setMessages([...res.data]);
          setTerm("")
          setLoading(false)
          updateScrollView();
        } else {
          Alert.alert('Error', res.msg)
        }
      })
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1  bg-[#2b5c8f]">
        <StatusBar style="dark" />
        <View className="mb-5">
          <Navbar />
        </View>
        <View className=" flex-1 space-y-5 bg-white">
          <Text style={{ fontFamily: 'poppins-medium' }} className="text-3xl text-gray-800 mt-6  px-4">AI Chat Companion 🚀</Text>
          <View className="flex flex-row justify-between  items-center">
            <TextInput
              placeholderTextColor="gray"
              placeholder={"What are you looking for ?"}
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
                onPress={() => handleSubmit()}
                className="bg-[#2b5c8f] mr-4 px-2 py-2 rounded-xl">
                <MagnifyingGlassIcon color="white" />
              </TouchableOpacity>
            }
          </View>
          <View
            style={{ height: hp(55) }}
            className="bg-neutral-200 rounded-3xl p-4 mx-4 mt-5"
          >
            <ScrollView
              ref={scrollViewRef}
              bounces={false}
              showsVerticalScrollIndicator={false}
            >
              <Pressable className="space-y-4">
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-[#2b5c8f] rounded-tl-none">
                            <Image
                              source={{ uri: message.content }}
                              className="rounded-2xl"
                              resizeMode='contain'
                              style={{ width: wp(60), height: wp(60) }}
                            />
                          </View>
                        </View>
                      )
                    } else {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View
                            style={{ width: wp(70) }}
                            className="bg-[#2b5c8f] rounded-xl p-2.5 rounded-tl-none"
                          >
                            <Text className="text-white" style={{ fontFamily: 'poppins-regular' }}>{message.content}</Text>
                          </View>
                        </View>
                      )
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{ width: wp(70) }}
                          className="bg-white rounded-xl p-2.5 rounded-tr-none"
                        >
                          <Text style={{ fontFamily: 'poppins-medium' }}>{message.content}</Text>
                        </View>
                      </View>
                    )
                  }
                })}
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default RobotScreen