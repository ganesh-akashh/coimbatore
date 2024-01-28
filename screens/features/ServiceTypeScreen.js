import { View, Text, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/Navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Empty from '../../components/shared/Empty'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../firebase'
import ServiceDetailsCard from '../../components/cards/ServiceDetailsCard'


const ServiceTypeScreen = ({ route, navigation }) => {

  const { title, imgUrl } = route.params;

  const storesRef = collection(FIRESTORE_DB, "stores");


  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState([]);


  useEffect(() => {

    const fetchQuery = async () => {
      try {
        setLoading(true)
        const q = query(storesRef, where("type", "==", title));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        if (data) {
          setServices(data);
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuery();
  }, [])



  return (
    <SafeAreaView className="flex-1 bg-[#2b5c8f]">
      <StatusBar style="light" />
      <View className="mb-2">
        <Navbar />
      </View>
      <View className="px-3  flex-1  bg-white mt-3 p-1 ">
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
                  renderItem={({ item }) => <ServiceDetailsCard service={item} />}
                />
              </View>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ServiceTypeScreen