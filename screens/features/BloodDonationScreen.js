import { View, Text, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/Navbar'
import { FIRESTORE_DB } from '../../firebase'
import Empty from '../../components/shared/Empty'
import { collection, getDocs, query, where } from 'firebase/firestore'
import BloodDonationCard from '../../components/cards/BloodDonationCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const BloodDonationScreen = ({ route, navigation }) => {

    const { title, imgUrl } = route.params;

    const bloodRef = collection(FIRESTORE_DB, "bloodDonation");


    const [loading, setLoading] = useState(false);

    const [services, setServices] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const querySnapshot = await getDocs(bloodRef);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setServices(data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-[#2b5c8f]">
            <StatusBar style="light" />
            <View className="mb-2">
                <Navbar />
            </View>
            <View className="px-3  flex-1  bg-white mt-3 p-1 ">
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
                <View className="flex-1 bg-[#f7f9fc]">
                    {loading ?
                        <View className="flex justify-center items-center flex-1">
                            <ActivityIndicator color="black" />
                        </View>
                        :
                        services && services.length == 0 ? <Empty title="No services found!" /> :
                            <View className="mb-10">
                                <FlatList
                                    data={services}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => <BloodDonationCard service={item} />}
                                />
                            </View>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BloodDonationScreen