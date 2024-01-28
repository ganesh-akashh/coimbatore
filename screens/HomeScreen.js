import { View,  ScrollView } from 'react-native'
import React, { useState } from 'react'
// import ImageSlider from '../components/home/ImageSlider'
import HeroContact from '../components/home/HeroContact'
import HomeWeather from '../components/home/HomeWeather'


const HomeScreen = () => {

 
  return (
    
      <ScrollView className=" bg-[#F5F7F8]">
        <View className="mt-4 ">
          <View className=" py-3 px-3">
            {/* <ImageSlider /> */}
          </View>
          <View className="flex justify-center px-3  py-1">
            <HeroContact />
          </View>

          <View className="flex justify-center px-3 py-2">
            <HomeWeather />
          </View>

        </View>
      </ScrollView>
  
  )
}

export default HomeScreen