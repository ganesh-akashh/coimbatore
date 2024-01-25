import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { checkImageURL } from '../../utils'
import { HeartIcon } from 'react-native-heroicons/outline'
const JobCard = ({ job }) => {
    const requiredSkills = job?.job_required_skills;
    const jobLink = job?.job_google_link;





    return (
        <View className=" mt-4 p-3 flex-1 shadow-lg   items-center rounded-lg  border flex  border-[#f8f8f9]  shadow-sm bg-[#FFFFFF]">

            <Image
                source={{
                    uri: checkImageURL(job.employer_logo)
                        ? job.employer_logo
                        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                }}
                resizeMode='contain'
                style={{ width: 70, height: 70 }}
            />

            <View className="flex-1">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-base text-gray-800 text-center" numberOfLines={1}>{job?.job_title}</Text>
                <Text style={{ fontFamily: 'poppins-regular' }} className="text-base text-gray-700 text-center">{job?.job_employment_type}</Text>
            </View>
            <View className="mt-2 self-start">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-base mb-2 text-gray-800">Required Skills:</Text>
                {requiredSkills ? (
                    requiredSkills.map((skill, index) => (
                        <Text key={index} style={{ fontFamily: 'poppins-regular' }} className="mt-1" >
                            ✅ {skill}
                        </Text>
                    ))
                ) : (
                    <Text>No data available.</Text>
                )}
            </View>
                <TouchableOpacity onPress={() => Linking.openURL(jobLink ? jobLink : 'https://careers.google.com/jobs/results/')} className="bg-sky-800 items-center flex-row justify-center  gap-2  w-full px-2  pb-2.5 rounded-lg mt-8">
                <HeartIcon color="white" size={20} />
                    <Text className="text-white text-base mb-0.5" style={{ fontFamily: 'poppins-medium' }}>
                    Apply for Job
                    </Text>
                </TouchableOpacity>

        </View>
    )
}

export default JobCard