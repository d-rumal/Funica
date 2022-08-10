import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";

const { height, width } = Dimensions.get('window');

const DividerWithText = ({ text }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.dividerStyle}>
            <View style={styles.hairline} />
            <Text style={{ ...styles.orText, color: colors.text }}>{text}</Text>
            <View style={styles.hairline} />
        </View>
    );
}

const styles = StyleSheet.create({
    dividerStyle: {
        width: width * 0.85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hairline: {
        backgroundColor: '#d7d0d0',
        height: 1,
        flex: 1
    },
    orText: {
        fontFamily: 'AvenirNext-Medium',
        fontSize: 14,
        paddingHorizontal: 5,
        alignSelf: 'center',
    },
})

export default DividerWithText;