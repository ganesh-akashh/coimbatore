import { View, Text, TouchableOpacity, Dimensions ,Platform } from 'react-native'
import { ArrowRightStartOnRectangleIcon,  BellIcon,  UserIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {

    const screenWidth = Dimensions.get('window').width;
    let marginValue = screenWidth * 0.045;
    const navigation = useNavigation();


  if (Platform.OS === 'android') {
    marginValue *= 1.5; 
  }



    return (
        <View className="flex-row justify-between items-center px-5" style={{ marginTop: marginValue }}>
            <View>
                <UserIcon color="white" strokeWidth={2} size="28" />
            </View>
            <View>
                <Text style={{ fontFamily: 'lobster-regular' }} className=" text-white  text-3xl ">
                    Namba Kovai
                </Text>
            </View>
            <View>
                <ArrowRightStartOnRectangleIcon color="white" strokeWidth={2} size="28" />
            </View>
        </View>
    )
}

export default Navbar