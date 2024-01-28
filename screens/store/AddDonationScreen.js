import { View, Text, TouchableWithoutFeedback, TextInput, Image, SafeAreaView, KeyboardAvoidingView, Keyboard, Platform, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Navbar from '../../components/shared/Navbar'
import { addDoc, collection } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../firebase'

const AddDonationScreen = ({ route, navigation }) => {


  const [loading, setLoading] = useState(false);
  const { title, imgUrl } = route.params;

  const bloodDonationRef = collection(FIRESTORE_DB, "bloodDonation");

  const [state, setState] = useState({
    userName: "",
    age: "",
    mobileNumber: "",
    bloodGroup: "",
  })

  const { userName, age, mobileNumber, bloodGroup } = state;

  const setCombinedState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const docRef = await addDoc(bloodDonationRef, {
        userName,
        mobileNumber,
        age,
        bloodGroup
      })
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 bg-[#2b5c8f]">
        <StatusBar style="dark" />
        <View className="mb-2">
          <Navbar />
        </View>
        <View className="px-3 bg-white mt-3 p-1 ">
          <View className="flex-row  justify-center items-center">
            <Image
              source={imgUrl}
              resizeMode='contain'
              style={{ width: wp(16), height: wp(15) }}
            />
            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-3xl text-gray-700 p-3 mt-5">
              {title}
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: 'poppins-medium' }} className="text-base text-gray-700 p-3 mt-5">
              "Be a hero today. Register your blood donation and make an impact!"
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
          <ScrollView className="flex-1 bg-[#F5F7F8]">
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View className="mt-5  space-y-5 mx-4 ">
                <>
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="px-2 text-lg text-gray-700 py-2"
                  >
                    Your Name :
                  </Text>
                  <TextInput
                    style={{ fontFamily: 'poppins-regular' }}
                    placeholder='Enter your name*'
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setCombinedState({ userName: text })}
                    className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                    textAlignVertical='top'

                  />
                </>
                <View>
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="px-2 text-lg text-gray-700 py-2"
                  >
                    Mobile Number :
                  </Text>
                  <TextInput
                    style={{ fontFamily: 'poppins-regular' }}
                    placeholder='Enter your mobile number*'
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setCombinedState({ mobileNumber: text })}
                    className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                    textAlignVertical='top'

                  />
                </View>
                <View>
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="px-2 text-lg text-gray-700 py-2"
                  >
                    Age :
                  </Text>
                  <TextInput
                    style={{ fontFamily: 'poppins-regular' }}
                    placeholder='Enter your age*'
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setCombinedState({ age: text })}
                    className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                    textAlignVertical='top'

                  />
                </View>

                <View>
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="px-2 text-lg text-gray-700 py-2"
                  >
                    Blood Group :
                  </Text>
                  <TextInput
                    style={{ fontFamily: 'poppins-regular' }}
                    placeholder='Enter your blood group*'
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setCombinedState({ bloodGroup: text })}
                    className=" bg-white  rounded-md border-3 mt-1 shadow-sm border-[#f8f8f9] p-4"
                    textAlignVertical='top'

                  />
                </View>
                <View className="py-4">
                  <TouchableOpacity className="w-full  bg-[#2b5c8f] p-3 rounded-md text-center" onPress={handleSubmit} >
                    {loading ?
                      <ActivityIndicator color="white" /> :
                      <Text style={{ fontFamily: 'poppins-semibold' }} className="text-white text-center">Submit</Text>
                    }
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default AddDonationScreen