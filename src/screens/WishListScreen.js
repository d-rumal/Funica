import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Pressable } from "@react-native-material/core";
import HeadingBtnContainer from "../components/HeadingBtnContainer";
import CategoriesTab from "../components/UpperTabBarWishList";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";
AntDesign.loadFont()

const { height, width } = Dimensions.get('window');
const WishListScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={styles.backBtnWithHeadingContainerStyle}>
                <Pressable
                    pressEffect="none"
                    style={({ pressed }) =>
                        pressed
                            ? { ...styles.backIcon, opacity: 0.5 }
                            : styles.backIcon}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <AntDesign name="arrowleft" size={25} color={colors.text} />
                </Pressable>
                <Text style={{ ...styles.backBtnWithHeadingTextStyle, color: colors.text }}>My WishList</Text>
                <AntDesign name="search1" size={25} style={{ alignSelf: 'flex-end', marginLeft: width * 0.45 }} color={colors.text} />
            </View>
            <View style={{ height: 20 }} />
            <CategoriesTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backBtnWithHeadingContainerStyle: {
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    backBtnWithHeadingTextStyle: {
        alignSelf: 'flex-end',
        marginLeft: 15,
        marginBottom: 1,
        fontSize: 18,
        fontFamily: 'AlbertSans-SemiBold'
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginTop: height * 0.06,
        marginLeft: width * 0.05
    },

})

export default WishListScreen;