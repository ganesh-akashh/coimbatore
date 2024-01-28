import { View, Text, Image } from 'react-native'
import React from 'react'

const Empty = ({title}) => {
  return (
    <View className="mt-20 justify-center items-center ">
      <Image
        source={require("../../assets/images/empty.png")}
        style={{ width: 300, height: 260 }}
      />
      <Text
        className="text-center mt-10 text-xl "
        style={{ fontFamily: 'poppins-semibold' }}
      >{title}</Text>
    </View>
  )
}

export default Empty