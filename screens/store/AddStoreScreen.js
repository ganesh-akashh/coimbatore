import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Navbar from '../../components/shared/Navbar'
import StoreCard from '../../components/cards/StoreCard'

const stores = [
  {
    title: "Clothing",
    imgUrl: require("../../assets/images/clothing.png")
  },
  {
    title: "Geo Tagging",
    imgUrl: require("../../assets/images/map.png")
  },
  {
    title: "Restaurants",
    imgUrl: require("../../assets/images/food.png")
  },
  {
    title: "Pharmacy",
    imgUrl: require("../../assets/images/health.png")
  },
  {
    title: "Accessories",
    imgUrl: require("../../assets/images/gadgets.png")
  },
  {
    title: "Fitness",
    imgUrl: require("../../assets/images/fitness.png")
  },
  {
    title: "Beauty",
    imgUrl: require("../../assets/images/beauty.png")
  },
  {
    title: "Development",
    imgUrl: require("../../assets/images/software.png")
  },
  {
    title: "Cleaning",
    imgUrl: require("../../assets/images/cleaning.png")
  },
  {
    title: "Repairs",
    imgUrl: require("../../assets/images/repair.png")
  },
  {
    title: "Pet Shop",
    imgUrl: require("../../assets/images/pets.png")
  },
  {
    title: "Real Estate",
    imgUrl: require("../../assets/images/house.png")
  },
  {
    title: "Travel",
    imgUrl: require("../../assets/images/travel.png")
  },

  {
    title: "Others",
    imgUrl: require("../../assets/images/bulb.png")
  }
]

const AddStoreScreen = () => {
  return (
    <SafeAreaView className="flex-1  bg-[#2b5c8f]">
      <StatusBar style='light' />
      <View className="mb-5">
        <Navbar />
      </View>
      <View className="flex-1 bg-[#f8f8f8] space-y-3">
        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-3 mt-5">
          Choose your service
        </Text>
        <ScrollView>

          <View className="flex px-2 mb-5 flex-row flex-wrap">
            {
              stores.map((store, index) => (
                <StoreCard key={index} title={store.title} imgUrl={store.imgUrl} />
              ))
            }
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default AddStoreScreen