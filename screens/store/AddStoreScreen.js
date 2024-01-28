import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Navbar from '../../components/shared/Navbar'
import StoreCard from '../../components/cards/StoreCard'
import { stores } from '../../utils'

const AddStoreScreen = () => {
  return (
    <SafeAreaView className="flex-1  bg-[#2b5c8f]">
      <StatusBar style='light' />
      <View className="mb-5">
        <Navbar />
      </View>
      <View className="flex-1 bg-[#f8f8f8] space-y-3">
        <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-3 mt-5">
          Add your service
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