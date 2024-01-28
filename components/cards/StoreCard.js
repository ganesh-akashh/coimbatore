import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const StoreCard = ({ title, imgUrl }) => {

    console.log(title);

    const navigation = useNavigation();

    const route = title == "Geo Tagging" ? "MapFormScreen" : "StoreFormScreen";

    return (
        <TouchableOpacity
            className="flex mr-3 w-28 p-1.5 mt-4  border rounded-xl bg-white   border-[#f8f8f9]  shadow-sm space-y-2 justify-center items-center"
            onPress={() => navigation.navigate(route, {
                title,
                imgUrl
            })}
        >
            <Image
                source={imgUrl}
                resizeMode='contain'
                style={{ width: wp(16), height: wp(15) }}
            />
            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-sm text-center">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default StoreCard