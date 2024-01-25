import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ArrowRightStartOnRectangleIcon, Bars3CenterLeftIcon, BellIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {

    const screenWidth = Dimensions.get('window').width;
    const marginValue = screenWidth * 0.045;
    const navigation = useNavigation();

    return (
        <View className="flex-row justify-between items-center px-5" style={{ marginTop: marginValue }}>
            <View>
                <Bars3CenterLeftIcon color="white" strokeWidth={2} size="28" />
            </View>
            <View>
                <BellIcon color="white" strokeWidth={2} size="28" />
            </View>
        </View>
    )
}

export default Navbar