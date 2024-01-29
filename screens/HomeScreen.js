import { View, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/home/ImageSlider'
import HeroContact from '../components/home/HeroContact'
import HomeWeather from '../components/home/HomeWeather'
import StatsCard from '../components/cards/StatsCard'

const HomeScreen = () => {



  return (

    <ScrollView className=" bg-[#F5F7F8]">
      <View className="mt-4 ">
        <View className=" py-3 px-3">
          <ImageSlider />
        </View>
        <View className="flex justify-center px-3  py-1">
          <HeroContact />
        </View>
        <View className="flex justify-center mt-5 px-3 py-2">
          <HomeWeather />
        </View>
        <View className="flex mb-2 justify-center px-3 py-2">
          <StatsCard />
        </View>
        <View className="flex mb-2 justify-center px-3 py-2">

        </View>
      </View>
    </ScrollView>

  )
}

export default HomeScreen