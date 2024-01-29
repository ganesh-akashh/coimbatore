import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const ChatList = ({ communities }) => {


    return (
        <TouchableOpacity className="flex flex-row border rounded-xl rounded-tl-none   border-gray-400  items-center mt-5 p-1.5 ">
            <View className="border border-[#ededf2] p-2.5 rounded-full">
                <Image
                    source={communities.imgUrl}
                    resizeMode='contain'
                    style={{ width: wp(8), height: wp(8) }}
                />
            </View>
            <View className="">
                <Text style={{ fontFamily: 'poppins-regular',maxWidth: wp(65) }} className="text-lg ml-2.5 text-gray-800 text-center">
                    {communities.type} Community
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default ChatList