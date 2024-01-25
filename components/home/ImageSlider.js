// import { View, Text } from 'react-native'
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { sliderImages } from '../../utils';



// const ItemCard = ({ item, index }, parallaxProps) => {
//     return (
//         <View key={index} style={{ width: wp(100) - 70, height: hp(25) }}>
//             <ParallaxImage
//                 source={item}
//                 containerStyle={{ borderRadius: 30, flex: 1 }}
//                 style={{ resizeMode: 'contain' }}
//                 parallaxFactor={1}
//                 {...parallaxProps}
//             />
//         </View>
//     )
// }

// const ImageSlider = () => {
//     return (
//         <Carousel
//             data={sliderImages}
//             loop={true}
//             autoplay={true}
//             renderItem={ItemCard}
//             hasParallaxImages={true}
//             sliderWidth={wp(100)}
//             firstItem={1}
//             autoplayInterval={2000}
//             itemWidth={wp(100) - 70}
//             slideStyle={{ display: 'flex', alignItems: 'center' }}
//         />
//     )
// }

// export default ImageSlider