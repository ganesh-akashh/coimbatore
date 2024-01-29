import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { FIRESTORE_DB } from "../../firebase";
import { collection, onSnapshot, getDocs } from 'firebase/firestore';

const MapScreen = () => {

    const INITIAL_REGION = {
        latitude: 11.0168,
        longitude: 76.9558,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const electricVehicleLocation = [
        {
            StationName: "Tata EV Charging Station",
            latitude: "11.049947",
            longitude: "77.057774",
        },
        {
            StationName: "Tata EV Charger",
            latitude: "11.021060",
            longitude: "76.942910",
        },
        {
            StationName: "VEEV Charging Station",
            latitude: "11.011820",
            longitude: "76.95770",
        },
    ]




    const [cameras, setCameras] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const locationRef = collection(FIRESTORE_DB, "location");


    useEffect(() => {
        const unsubscribe = onSnapshot(locationRef, (querySnapshot) => {
            const cameraData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setCameras(cameraData);
        });
        return () => unsubscribe();
    }, []);

    const handleMarkerPress = (marker) => {
        setSelectedMarker(marker);
        mapViewRef.current.animateToRegion({
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: INITIAL_REGION.latitudeDelta,
            longitudeDelta: INITIAL_REGION.longitudeDelta,
        });
    };

    const handleCarPress = (marker) => {
        setSelectedMarker(marker);
        mapViewRef.current.animateToRegion({
            latitude: marker.latitude,
            longitude: marker.longitude,
            // latitudeDelta: INITIAL_REGION.latitudeDelta,
            // longitudeDelta: INITIAL_REGION.longitudeDelta,
        })
    }

    const mapViewRef = React.createRef();

    return (
        <View className="flex-1">
            <MapView
                ref={mapViewRef}
                style={StyleSheet.absoluteFill}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
            >
                {cameras.map((camera) => (
                    <Marker
                        key={camera.id}
                        coordinate={{
                            latitude: camera.latitude,
                            longitude: camera.longitude,
                        }}
                        title={camera.name}
                        description={`Camera ID: ${camera.id}`}
                        onPress={() => handleMarkerPress(camera)}
                    >
                        <Callout >
                            <View className="rounded-lg">
                                <View className="p-2.5">
                                    <View className="flex flex-row gap-2">
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >Owner Name :
                                        </Text>
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >{camera.userName}
                                        </Text>
                                    </View>
                                    <View className="flex flex-row gap-2">
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >Mobile Number :
                                        </Text>
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >{camera.mobileNumber}
                                        </Text>
                                    </View>
                                    <View className="flex flex-row gap-2">
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >Camera Specifications:
                                        </Text>
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >{camera.specifications}
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </Callout>
                    </Marker>
                ))}
                {electricVehicleLocation.map((station, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: parseFloat(station.latitude),
                            longitude: parseFloat(station.longitude),
                        }}
                        title={station.StationName}
                        description={`EV Station: ${station.StationName}`}
                        onPress={() => handleCarPress(station)}
                        pinColor="blue"
                    >
                        <Callout>
                            <View className="rounded-lg">
                                <View className="p-2.5">
                                    <View className="flex flex-row gap-2">
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >Station Name :
                                        </Text>
                                        <Text
                                            style={{ fontFamily: 'poppins-semibold' }}
                                        >{station.StationName}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </Callout>
                    </Marker>

                ))}
            </MapView>
        </View>
    );
}

export default MapScreen;
