import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, Animated, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window')
const Product = ({ title, price, imagePath }) => {

    const { colors } = useTheme();
    const { navigate } = useNavigation();

    return (
        <>
            <Pressable
                style={{ margin: 0, padding: 0 }}
                onPress={() => {
                    navigate('Detail', {
                        imagePath: imagePath,
                        title: title,
                        price: price,
                    });
                }}
            >
                <View style={styles.container}>
                    <Image
                        source={{ uri: imagePath }}
                        style={{ ...styles.imageStyle, backgroundColor: colors.componentBackground }}
                    />
                    <View style={{
                        backgroundColor: '#000',
                        position: 'absolute',
                        padding: 6,
                        right: '15%',
                        top: '4%',
                        borderRadius: 20
                    }}>
                        <MaterialCommunityIcons name="heart" size={18} style={{
                            color: '#fff',
                        }} />
                    </View>
                    <Text style={{ ...styles.headingStyle, color: colors.text }}>{title}</Text>
                    <Text style={{ ...styles.price, color: colors.text }}>${price}</Text>
                </View >
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 2,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: height * 0.02369668246
    },
    imageStyle: {
        height: width * 0.41025641025,
        width: width * 0.41025641025,
        borderRadius: 20
    },
    headingStyle: {
        fontFamily: 'AlbertSans-SemiBold'
    },
    price: {
        fontFamily: 'AlbertSans-Medium',
        alignSelf: 'flex-start',
        marginLeft: 30
    }
})

export default Product;