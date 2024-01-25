import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/cards/JobCard';

const JobScreen = () => {


    const [selectedJob, setSelectedJob] = useState();

    const { data, isLoading, error } = useFetch("search", {
        query: "Jobs in Coimbatore",
        num_pages: "1",
    });

  





    return (
        <>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="black" />
                </View>
            ) : (
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-8">
                        Find your perfect job !
                    </Text>
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
        </>
    );
};

export default JobScreen;
