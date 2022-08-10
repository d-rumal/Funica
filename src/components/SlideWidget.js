import React from "react";
import { View, StyleSheet, Image, Dimensions, FlatList } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";
AntDesign.loadFont().then()
const { height, width } = Dimensions.get('window')


const SlideWidget = () => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.componentBackground }}>
            <View style={{ padding: 20 }}>
                <Text style={{ ...styles.text1Style, color: colors.text }}>25%</Text>
                <Text style={{ ...styles.text2Style, color: colors.text }}>Today's Special!</Text>
                <Text style={{ ...styles.text3Style, color: colors.text }}>Get discount for every order. only valid for today</Text>
            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    source={require('../../assets/images/image-removebg-preview.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        alignSelf: 'stretch',
        height: '23%',
        margin: 20,
        flexDirection: 'row'
    },
    text1Style: {
        fontFamily: 'AlbertSans-Bold',
        fontSize: 40,
        paddingBottom: 10,
    },
    text2Style: {
        fontFamily: 'AlbertSans-Semibold',
        fontSize: 17,
        paddingBottom: 10
    },
    text3Style: {
        fontSize: 13,
        fontFamily: 'AlbertSans-Light',
        width: width * 0.45,
    }
})

export default SlideWidget;