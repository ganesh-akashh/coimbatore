import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const BloodDonationCard = ({ service }) => {


    return (
        <Pressable>
            <View
                className="rounded-lg border mb-3 border-[#d9d9e1] shadow-sm bg-white ml-2  mr-2 mt-5 mx-4  "
            >
                <View className="p-2 flex gap-1 mx-4 mt-1">
                    <View className="flex gap-2  flex-row flex-wrap items-center">
                        <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Name:</Text>
                        <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{service.userName}</Text>
                    </View>
                    <View className="flex gap-2  flex-row flex-wrap items-center">
                        <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Mobile Number:</Text>
                        <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{service.mobileNumber}</Text>
                    </View>
                    <View className="flex gap-2  flex-row flex-wrap items-center">
                        <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Age:</Text>
                        <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{service.age}</Text>
                    </View>
                    <View className="flex gap-2  flex-row flex-wrap items-center">
                        <Text className='font-medium text-sm md:text-base' style={{ fontFamily: 'poppins-semibold' }}>Blood Group:</Text>
                        <Text style={{ fontFamily: 'poppins-semibold' }} className='ml-2 text-gray-600'>{service.bloodGroup}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default BloodDonationCard