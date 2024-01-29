import { View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native'
import { ArrowRightStartOnRectangleIcon, BellIcon, UserIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../redux/reducers/auth';

const Navbar = () => {

    const screenWidth = Dimensions.get('window').width;
    let marginValue = screenWidth * 0.045;
    const navigation = useNavigation();

    const dispatch = useDispatch();


    if (Platform.OS === 'android') {
        marginValue *= 1.5;
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            await AsyncStorage.clear();
            dispatch(removeAuth());
        } catch (error) {
            console.log(error);
        }
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
            <TouchableOpacity onPress={() => handleLogout()}>
                <ArrowRightStartOnRectangleIcon color="white" strokeWidth={2} size="28" />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar