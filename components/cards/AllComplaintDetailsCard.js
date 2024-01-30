import { View, Text, Pressable, Image, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline';
import CryptoJS from 'react-native-crypto-js';

const AllComplaintDetailsCard = ({ service }) => {

    const [isLoading, setisLoading] = useState(false);

    const handleLoadStart = () => {
        setisLoading(true);
    };

    const handleLoadEnd = () => {
        setisLoading(false);
    };

    const openMapUrl = () => {
        if (service.mapUrl) {
            Linking.openURL(service.mapUrl);
        }
    };

     const decryptMessage = (encryptedMessage, key) => {
        const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
        return decryptedMessage;
    };

      const renderSpecifications = () => {
        const decryptedDescription = decryptMessage(service.description, 'nambakovai');
        const specificationsArray = decryptedDescription.split('. ');
        
        return specificationsArray.map((specification, index) => (
            <Text key={index} style={{ fontFamily: 'poppins-regular' }} className="text-base mt-2">
                --  {specification}
            </Text>
        ));
    };


    return (
        <Pressable
            className="mt-8 p-3  rounded-lg border flex border-[#f8f8f9] shadow-sm bg-[#FFFFFF]"
        >
            {service.complaintUrl &&
                <View className="relative">
                    {
                        isLoading &&
                        <View className="flex absolute left-40  top-36 justify-center items-center">
                            <ActivityIndicator color="black" />
                        </View>
                    }
                    <Image
                        source={{ uri: service.complaintUrl }}
                        style={{ width: 'auto', height: 250 }}
                        className="mt-3 rounded-lg"
                        onLoadStart={handleLoadStart}
                        onLoadEnd={handleLoadEnd}
                    />
                </View>
            }
            <View className="flex flex-row items-center gap-3  mt-0.5 ">
                <Text style={{ fontFamily: 'poppins-semibold' }} className=" text-lg text-gray-700  mt-5">
                    Field :
                </Text>
                <Text style={{ fontFamily: 'poppins-medium' }} className=" text-base text-gray-700 ">
                    {service.field}
                </Text>
            </View>
            <Text style={{ fontFamily: 'poppins-semibold' }} className=" text-lg text-gray-700  mt-5">
                Description
            </Text>
            {renderSpecifications()}

            <Pressable onPress={openMapUrl}>
                <View className="flex flex-row items-center gap-3  mt-0.5 ">
                    <MapPinIcon color="red" size={18} />
                    <Text style={{ fontFamily: 'poppins-regular' }} className=" text-sm text-gray-700 ">
                        {service.mapUrl}
                    </Text>
                </View>
            </Pressable>

            <View className={`flex justify-center items-center mt-4 p-3 rounded-lg ${service.status === "true" ? "bg-green-700" : "bg-red-700"}`}>
                <TouchableOpacity>
                    <Text style={{ fontFamily: 'poppins-regular' }} className=" text-sm text-white ">
                        {service.status === "false" ? "Pending" : "Completed"}
                    </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default AllComplaintDetailsCard