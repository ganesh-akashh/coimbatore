import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'


const ServiceCard = ({ title, imgUrl }) => {

    const navigation = useNavigation();



    if (title === "Geo Tagging") {
        return null;
    }

    let route;

    if (title == "Donation") {
        route = "BloodDonationScreen"
    } else {
        route = "ServiceTypeScreen";
    }




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
                style={{ width: wp(12), height: wp(12) }}
            />
            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-sm text-center">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ServiceCard