import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const NewsCard = ({ article }) => {
  return (
    <Pressable className=" mt-4 p-3 rounded-lg  border flex  border-[#f8f8f9]  shadow-sm bg-[#FFFFFF]">
      <Image
        source={{ uri: article.urlToImage }}
        style={{ width: "auto", height: 250 }}
      />
      <Text style={{ fontFamily: 'poppins-semibold' }} className="text-base mt-5">{article.title}</Text>
      <Text style={{ fontFamily: 'poppins-regular'}} className="text-sm mt-2">{article.description}</Text>
    </Pressable>
  )
}

export default NewsCard