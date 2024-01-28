import { View, Text, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { MapIcon, MapPinIcon, PhoneIcon } from 'react-native-heroicons/outline';

const ServiceDetailsCard = ({ service }) => {

  const [isLoading, setisLoading] = useState(false);

  console.log(isLoading);


  const handleLoadStart = () => {
    setisLoading(true);
  };

  const handleLoadEnd = () => {
    setisLoading(false);
  };

  const renderSpecifications = () => {
    const specificationsArray = service.specifications.split('. ');
    return specificationsArray.map((specification, index) => (
      <Text key={index} style={{ fontFamily: 'poppins-regular' }} className="text-base mt-2">
        👉🏻 {specification}
      </Text>
    ));
  };
  return (
    <Pressable
      className="mt-8 p-3  rounded-lg border flex border-[#f8f8f9] shadow-sm bg-[#FFFFFF]"
    >
      <View className="relative">
        {
          isLoading &&
          <View className="flex absolute left-40  top-36 justify-center items-center">
            <ActivityIndicator color="black" />
          </View>
        }
        <Image
          source={{ uri: service.shopImageUrl }}
          style={{ width: 'auto', height: 250 }}
          className="mt-3 rounded-lg"
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
        />
      </View>
      <Text style={{ fontFamily: 'lobster-regular' }} className="text-4xl text-gray-700 text-center mt-5">
        {service.companyName}
      </Text>
      <Text style={{ fontFamily: 'poppins-semibold' }} className=" text-lg text-gray-700  mt-5">
        Description
      </Text>
      {renderSpecifications()}
      <View className="flex flex-row items-center gap-3  mt-0.5 ">

        <PhoneIcon color="black" size={18} />
        <Text style={{ fontFamily: 'poppins-regular' }} className=" text-base text-gray-700 ">
          {service.mobileNumber}
        </Text>
      </View>
      <View className="flex flex-row items-center gap-3  mt-0.5 ">
        <MapPinIcon color="red" size={18} />
        <Text style={{ fontFamily: 'poppins-regular' }} className=" text-sm text-gray-700 ">
          {service.mapUrl}
        </Text>
      </View>
    </Pressable>
  );
};

export default ServiceDetailsCard;
