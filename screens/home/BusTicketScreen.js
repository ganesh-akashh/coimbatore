import { View, Text,  ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Table, Row, Rows } from 'react-native-table-component';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useEffect, useState } from 'react';



const BusTicketScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");

    console.log(searchTerm);

    const busTitle = ['Bus route', 'Bus number'];

    useEffect(() => {

    }, [])

    const Bus = [
        ['Gandhipuram to Singanallur', '140,S1,S9,S9B,S11,19C'],
        ['Singanallur to Gandhipuram', '140,S1,S9,S9B,S11,19C'],
        ['Gandhipuram to Ukkadam', '3,3A,3C,3D,12,12A,12D,33A,33B'],
        ['Gandhipuram to Railway Station', '12,12A,12D,33A,33B,14,14A,14C'],
        ['Gandhipuram to Saravanampatti', '45C,111,45,57'],
        ['Gandhipuram to Maruthamalai', '1,1D,70,70A,70B'],

    ];

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="flex-1 bg-white ">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-3">
                    Discover Bus Routes !
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
                        className="bg-[#2b5c8f] mr-3 px-2 py-2 rounded-xl">
                        <MagnifyingGlassIcon color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView className=" px-4 bg-white  space-y-5    flex-1 ">
                    <Pressable className="flex justify-center mb-5">
                        <Table style={styles.table} />
                        <Row data={busTitle} style={styles.head} textStyle={styles.headText} />
                        <Rows
                            data={Bus.filter(([route, number]) =>
                                route.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                number.toLowerCase().includes(searchTerm.toLowerCase())
                            )}
                            textStyle={styles.rowText}
                            className="p-2 flex items-center "
                        />
                    </Pressable>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    table: {
        marginVertical: hp(2),
    },
    head: {
        height: hp(5),
        backgroundColor: '#f1f8ff',
    },
    headText: {
        textAlign: 'center',
        fontFamily: 'poppins-medium',
    },
    rowText: {
        textAlign: 'center',
        fontFamily: 'poppins-regular',
        marginVertical: hp(0.5)
    },
})


export default BusTicketScreen