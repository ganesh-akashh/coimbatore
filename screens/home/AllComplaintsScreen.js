import { View, Text, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import Navbar from '../../components/shared/Navbar'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../firebase'
import AllComplaintDetailsCard from '../../components/cards/AllComplaintDetailsCard'

const AllComplaintsScreen = () => {

  const [loading, setLoading] = useState(false);
  const communitiesRef = collection(FIRESTORE_DB, "complaints");
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(communitiesRef);
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuery();
  }, []);
  return (
    <View className="flex-1 bg-white">
      <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-5">
        Complaints and Queries !
      </Text>

      <View className="px-3  flex-1  bg-white mt-3 p-1 ">
        <View className="flex-1 bg-[#f7f9fc]">
          {loading ?
            <View className="flex mt-5 justify-center items-center ">
              <ActivityIndicator color="black" />
            </View> :
            <View className="mb-10">
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <AllComplaintDetailsCard service={item} />}
              />
            </View>
          }
        </View>
      </View>
    </View>
  )
}

export default AllComplaintsScreen