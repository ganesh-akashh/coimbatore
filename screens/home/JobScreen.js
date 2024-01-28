import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/cards/JobCard';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const JobScreen = () => {


    const [selectedJob, setSelectedJob] = useState();
    const [searchTerm, setSearchTerm] = useState("Jobs");

    const { data, isLoading, error, refetch } = useFetch("search", {
        query: `${searchTerm} in Coimbatore`,
        num_pages: "1",
    });

    console.log(error);










    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="flex-1">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-5">
                    Find your perfect job !
                </Text>
                <View className="flex flex-row justify-between  items-center">
                    <TextInput
                        placeholderTextColor="gray"
                        placeholder='What are you looking for ?'
                        style={{ fontFamily: 'poppins-medium' }}
                        className=" border w-[80%] my-1 mx-3 px-4 py-3 rounded-lg"
                        onChangeText={(text) => setSearchTerm(text)}

                    />
                    <TouchableOpacity
                        onPress={() => refetch()}
                        className="bg-[#2b5c8f] mr-3 px-2 py-2 rounded-xl">
                        <MagnifyingGlassIcon color="white" />
                    </TouchableOpacity>
                </View>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color="black" />
                    </View>
                ) : (
                    <View style={{ marginBottom: 10 }}>
                        <FlatList
                            className="px-3 mt-2"
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <JobCard job={item} />}
                        />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobScreen;
