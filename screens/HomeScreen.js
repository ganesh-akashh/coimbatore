import { View, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/home/ImageSlider'
import HeroContact from '../components/home/HeroContact'
import HomeWeather from '../components/home/HomeWeather'
import StatsCard from '../components/cards/StatsCard'

const HomeScreen = () => {


   const [performance, setPerformance] = useState([
    { firstName: 'Aravind', points: 180 },
    { firstName: 'Subash', points: 160 },
    { firstName: 'Kavin', points: 140 },
    { firstName: 'Sindhu', points: 120 },
    { firstName: 'Darshan', points: 100 },

  ]);
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
          <View
            className="rounded-lg border  border-[#f8f8f9] shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 "
          >

            <View className="flex flex-col  p-6">

              <Text className="text-xl text-center  text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                Top performers
              </Text>

              <View className="flex gap-3 mt-5">
                {performance.map((item, index) => (
                  <View key={index} className="flex-row flex-wrap border-b p-2 border-[#e1e1ea]  justify-between">
                    <View className="flex-row gap-2 items-center">
                      <Text className="text-base" style={{ fontFamily: 'poppins-bold' }}>{index + 1}.</Text>
                      <Text className="text-base text-gray-700" style={{ fontFamily: 'poppins-medium' }}>{item.firstName}</Text>
                    </View>
                    <Text className="text-base" style={{ fontFamily: 'poppins-medium' }}>{item.points} points</Text>
                  </View>
                ))}
              </View>

            </View>

          </View>
        </View>
      </View>
    </ScrollView>

  )
}

export default HomeScreen