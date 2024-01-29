import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MapIcon, MapPinIcon } from 'react-native-heroicons/outline'





const HomeWeather = () => {

  const [loading, setloading] = useState(false);
  const [humidity, setHumidity] = useState(45);
  const [description, setDescription] = useState("Cloudy");
  const [temperature, setTemperatute] = useState(29.9);





  useEffect(() => {
    const fetchWeatherData = async () => {
      setloading(true);
      try {
        const city = 'Coimbatore';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setHumidity(data.main.humidity)
          setTemperatute((data.main.temp - 273.15).toFixed(1))
          setDescription(data.weather[0].main)
          setloading(false)
        } else {
          console.error('Error fetching weather data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <View className="rounded-lg  border flex  p-2   border-[#f8f8f9]  shadow-sm bg-[#FFFFFF]">
      {loading ?
        <View className="w-full justify-center items-center h-20">
          <ActivityIndicator color="black" />
        </View>
        :
        <View className="p-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl" style={{ fontFamily: 'poppins-regular' }}>Coimbatore City</Text>
            <MapPinIcon color="red" />
          </View>
          <View className="mt-4">
            <Text className="text-4xl text-gray-800 " style={{ fontFamily: 'poppins-semibold' }}>{temperature} °</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-base text-gray-800 " style={{ fontFamily: 'poppins-regular' }}>Humidity : {humidity}</Text>
              <Text className="text-base text-gray-800 " style={{ fontFamily: 'poppins-regular' }}>🌤️ {description}</Text>
            </View>
          </View>
        </View>
      }
    </View>
  )
}

export default HomeWeather
