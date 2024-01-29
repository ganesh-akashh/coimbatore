import { View, Text } from 'react-native'
import {
    Square3Stack3DIcon,
    TrophyIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon,
} from 'react-native-heroicons/outline';
import { useState, useEffect } from 'react';
import { addDoc, collection, where, getDocs, query } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../firebase"

const StatsCard = () => {


    const [loading, setLoading] = useState(false);
    const [totalTasks, setTotalTasks] = useState(2);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [pendingTasks, setPendingTasks] = useState(0);
    const [totalPoints, setTotalPoints] = useState(10);

    const complaintsRef = collection(FIRESTORE_DB, "complaints");

    useEffect(() => {

        const fetchQuery = async () => {
            try {
                const querySnapshot = await getDocs(
                    query(complaintsRef, where('status', '==', "false"))
                );
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                if(fetchedData){
                    setPendingTasks(fetchedData.length)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchQuery();
    }, []);



    const userData = [
        {
            title: 'Total Tasks',
            value: totalTasks,
            icon: <Square3Stack3DIcon size={55} color="blue" />,
            color: '#f8f8f9',
        },
        {
            title: 'Completed Tasks',
            value: completedTasks,
            icon: <ShieldCheckIcon size={55} color="green" />,
            delay: 400,
        },
        {
            title: 'Pending Tasks',
            value: pendingTasks,
            icon: <ExclamationTriangleIcon size={55} color="brown" />,
            color: '#f8f8f9',
            delay: 600,
        },
        {
            title: 'Total Points',
            value: totalPoints,
            icon: <TrophyIcon size={55} color="orange" />,
            color: '#f8f8f9',
            delay: 800,
        },
    ]


    return (
        <View>
            <>
                {userData.map((item, index) => (
                    <View
                        key={index}
                        className={`rounded-lg border border-[#f8f8f9]  border-${item.color} shadow-sm bg-[#FFFFFF] ml-2 mr-2 mt-5 px-2 py-1 `}
                    >
                        <View className="flex flex-col space-y-1.5 p-6">
                            <Text className="text-lg text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-medium' }}>
                                {item.title}
                            </Text>
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-xl ml-1 leading-none tracking-tight" style={{ fontFamily: 'poppins-semibold' }}>
                                    {item.value}
                                </Text>
                                {item.icon}
                            </View>
                            <Text className="text-base text-gray-700 leading-none tracking-tight" style={{ fontFamily: 'poppins-regular' }}>
                                {item.title === 'Total Points' ? 'Points' : item.title}
                            </Text>
                        </View>
                    </View>
                ))}
            </>
        </View>
    )
}

export default StatsCard