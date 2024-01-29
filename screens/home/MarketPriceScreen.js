import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Table, Row, Rows } from 'react-native-table-component';

const MarketPriceScreen = () => {

    const vegetableTitle = ['Item', 'Price (per kg)'];

    const goldTitle = ['Item', 'Price (per g)']

    const fuelTitle = ['Item', 'Price (per g)']

    const Vegetables = [
        ['Tomato', '₹30 '],
        ['Onion', '₹30'],
        ['Carrot', '₹110'],
        ['Beans', '₹40'],
        ['Potato', '₹40'],
        ['Capsicum', '₹100'],
        ['Cauliflower', '₹45'],
        ['Cabbage', '₹25'],
        ['Brinjal', '₹40'],
        ['Beetroot', '₹40'],
        ['Radish', '₹60'],
    ];

    const Ornaments = [
        ['Gold', '₹5840'],
        ['Silver', '₹76.8'],
    ]

    const Fuel = [
        ['Petrol', '₹103.7'],
        ['Diesel', '₹95.5'],
        ['Kerosene', '₹20']
    ]

    const Meats = [
        ['Chicken', '₹160'],
        ['Mutton', '₹750'],
        ['Fish', '₹340'],
        ['Egg', '₹5.8'],
        ['Prawn', '₹399'],
        ['Crab', '₹490']
    ]




    return (
        <View className="flex-1 bg-white ">
            <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl p-4 mt-3">
                Discover Market Rates !
            </Text>
            <ScrollView className=" px-4 bg-white  space-y-5 pt-4   flex-1 ">
                <View className="flex justify-center">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/vegetable.png")}
                            resizeMode='contain'
                            style={{ width: wp(12), height: wp(12) }}
                            className="ml-3"
                        />
                        <Text style={{ fontFamily: 'poppins-medium' }} className="text-lg ml-3">
                            Vegetables Price
                        </Text>
                    </View>
                    <Table style={styles.table} >
                        <Row data={vegetableTitle} style={styles.head} textStyle={styles.headText} />
                        <Rows data={Vegetables} textStyle={styles.rowText} />
                    </Table>
                </View>
                <View className="flex justify-center mb-5">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/gold.png")}
                            resizeMode='contain'
                            style={{ width: wp(12), height: wp(12) }}
                            className="ml-3"
                        />
                        <Text style={{ fontFamily: 'poppins-medium' }} className="text-lg ml-3">
                            Gold & Silver Price
                        </Text>
                    </View>
                    <Table style={styles.table} >
                        <Row data={goldTitle} style={styles.head} textStyle={styles.headText} />
                        <Rows data={Ornaments} textStyle={styles.rowText} />
                    </Table>
                </View>
                <View className="flex justify-center mb-5">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/gas.png")}
                            resizeMode='contain'
                            style={{ width: wp(12), height: wp(12) }}
                            className="ml-3"
                        />
                        <Text style={{ fontFamily: 'poppins-medium' }} className="text-lg ml-3">
                            Fuel Price
                        </Text>
                    </View>
                    <Table style={styles.table} >
                        <Row data={fuelTitle} style={styles.head} textStyle={styles.headText} />
                        <Rows data={Fuel} textStyle={styles.rowText} />
                    </Table>
                </View>
                  <View className="flex justify-center mb-5">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/meat.png")}
                            resizeMode='contain'
                            style={{ width: wp(12), height: wp(12) }}
                            className="ml-3"
                        />
                        <Text style={{ fontFamily: 'poppins-medium' }} className="text-lg ml-3">
                         Meats Price
                        </Text>
                    </View>
                    <Table style={styles.table} >
                        <Row data={vegetableTitle} style={styles.head} textStyle={styles.headText} />
                        <Rows data={Meats} textStyle={styles.rowText} />
                    </Table>
                </View>
            </ScrollView>
        </View>
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
        marginVertical: hp(0.4)
    },
})

export default MarketPriceScreen

