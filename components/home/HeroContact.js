import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { HeartIcon, PhoneIcon, ShieldExclamationIcon, WifiIcon } from 'react-native-heroicons/outline'

const HeroContact = () => {

    const handlePress = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View className=" rounded-lg  border flex justify-between flex-row flex-wrap p-2   border-[#f8f8f9]  shadow-sm bg-[#FFFFFF]">
            <TouchableOpacity
                className="flex flex-col items-center justify-center"
                onPress={() => handlePress("8838113630")}
            >
                <WifiIcon color="gray" />
                <Text className="mt-0.5" style={{ fontFamily: 'poppins-regular' }}>Emergency</Text>
                <Text style={{ fontFamily: 'poppins-regular' }}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex flex-col items-center justify-center"
                onPress={() => handlePress("8838113630")}
            >
                <HeartIcon color="red" />
                <Text className="mt-0.5" style={{ fontFamily: 'poppins-regular' }}>Healthcare</Text>
                <Text style={{ fontFamily: 'poppins-regular' }}>Assistance</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex flex-col items-center justify-center"
                onPress={() => handlePress("8838113630")}
            >
                <PhoneIcon color="green" />
                <Text className="mt-0.5" style={{ fontFamily: 'poppins-regular' }}>Covid</Text>
                <Text style={{ fontFamily: 'poppins-regular' }}>Helpline</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex flex-col items-center justify-center"
                onPress={() => handlePress("8838113630")}
            >
                <ShieldExclamationIcon />
                <Text className="mt-0.5" style={{ fontFamily: 'poppins-regular' }}>Police</Text>
                <Text style={{ fontFamily: 'poppins-regular' }}>Helpline</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeroContact