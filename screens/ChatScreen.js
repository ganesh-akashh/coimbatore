import { View, Text, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Navbar from '../components/shared/Navbar'
import ChatList from '../components/shared/ChatList'



const communities = [
  {
    type: "Agriculture",
    imgUrl: require("../assets/images/agriculture.png")
  },
  {
    type: "Education",
    imgUrl: require("../assets/images/education.png")
  },
  {
    type: "HealthCare",
    imgUrl: require("../assets/images/health.png")
  },
  {
    type: "Sports & Fitness",
    imgUrl: require("../assets/images/fitness.png")
  },
  {
    type: "Women ",
    imgUrl: require("../assets/images/beauty.png")
  },
]


const ChatScreen = () => {
  return (
    <SafeAreaView className="flex-1  bg-[#2b5c8f]">
      <StatusBar style="dark" />
      <View className="mb-5">
        <Navbar />
      </View>
      <View className=" bg-white flex-1">
        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-3 mt-5">
          City Communities !
        </Text>
        <View className="flex bg-[#f7f9fc] space-y-3 mt-3 pt-2 flex-1 px-5">
          <FlatList
            data={communities}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ChatList communities={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ChatScreen