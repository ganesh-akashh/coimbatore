import { useState } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

const SignUpScreeen = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();


  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  console.log(formValues);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
      if (response.user) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        className="flex-1 bg-white"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-[0.25]">
        </View>
        <View className="flex-1  flex-row justify-center items-end" >
          <Image
            source={require("../../assets/images/logo.jpeg")}
            style={{ width: 240, height: 260 }}
          />
        </View>
        <View
          className={`flex-1  pt-6  px-4  space-y-3 border   border-[#dadde0] `}
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
          <View className="flex items-center mx-5  space-y-4">
            <View
              className={`border p-[5%] ${error ? "border-red-500" : "border-gray-500"} rounded-2xl w-full mb-1`}>
              <TextInput
                placeholder="Email Address"
                name="email"
                placeholderTextColor={'gray'}
                onChangeText={(text) => handleChange('email', text)}
                style={{ fontFamily: 'poppins-semibold' }}
                keyboardType="email-address"
                className="text-gray-700"
                autoCapitalize='none'
              />
            </View>
            <View
              className={`border p-4 ${error ? "border-red-500" : "border-gray-500"} relative  rounded-2xl w-full mb-1`}>

              <TextInput
                placeholder="Password"
                placeholderTextColor={'gray'}
                onChangeText={(text) => handleChange('password', text)}
                name="password"
                secureTextEntry
                style={{ fontFamily: 'poppins-semibold' }}
                className="text-gray-700"
              />
            </View>
            <View className="w-full">
              <TouchableOpacity
                onPress={handleSubmit} className={`w-full  bg-[#2b5c8f]  p-[4%] rounded-xl mb-3`}
              >
                {loading ?
                  <ActivityIndicator color="white" /> :
                  <Text className="font-medium text-white  text-center" style={{ fontFamily: 'poppins-semibold' }}>Sign Up</Text>
                }
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack("SignUp")} className="flex flex-row items-center">
              <Text style={{ fontFamily: 'poppins-medium' }} className="text-base text-gray-800 ">Already have an account ? </Text>
              <Text className="underline text-base text-[#2b5c8f]">
                Sign In
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpScreeen