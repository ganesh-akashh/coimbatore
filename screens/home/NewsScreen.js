import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { newsApiQuery } from '../../utils';
import NewsCard from '../../components/cards/NewsCard';

const NewsScreen = () => {


    const [loading, setLoading] = useState(false);
    const [articlesData, setArticlesData] = useState([]);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await newsApiQuery();
                if (response) {
                    setArticlesData(response.articles.slice(0, 10));
                }
                setLoading(false)
            } catch (error) {
                console.log(response);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {loading ?
                <View className=" flex-1 justify-center items-center">
                    <ActivityIndicator color="black" />
                </View> :
                <View className="mb-10">
                    <Text style={{ fontFamily: 'poppins-semibold' }} className="text-3xl text-gray-800 mt-6  px-3">Today's Top Stories</Text>
                    <FlatList
                    className="px-2 mt-3"
                        data={articlesData}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <NewsCard article={item} />}
                    />
                </View>
            }
        </>
    )
}

export default NewsScreen