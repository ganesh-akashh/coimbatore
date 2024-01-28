import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import Navbar from '../../components/shared/Navbar'
import ServiceCard from '../../components/cards/ServiceCard'
import { stores } from '../../utils'

const ServicesScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#2b5c8f]">
            <StatusBar style="light" />
            <View className="mb-5">
                <Navbar />
            </View>
            <View className="flex-1 bg-[#f8f8f8] space-y-3">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-3 mt-5">
                    Choose your service
                </Text>
                <ScrollView>
                    <View className="flex px-2 mb-5 flex-row flex-wrap">
                        {
                            stores.map((store, index) => (
                                <ServiceCard key={index} title={store.title} imgUrl={store.imgUrl} />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ServicesScreen