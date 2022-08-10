import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";
Icon.loadFont().then()
const { height, width } = Dimensions.get('window')


const ContinueWithBtn = ({ name, title, onPress }) => {
    const { colors } = useTheme();
    return (
        <Pressable
            onPress={onPress}
            pressEffect="none"
            style={({ pressed }) =>
                pressed
                    ? { ...styles.continueWith, opacity: 0.5, borderColor: colors.border }
                    : { ...styles.continueWith, borderColor: colors.border }
            }
        >
            <Icon name={`${name}`} style={styles.companyIcon} size={20} color={colors.text} />
            <Text adjustsFontSizeToFit style={{ ...styles.buttonTextStyle, color: colors.text }}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    continueWith: {
        borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.015,
        width: width * 0.85,
        height: height * 0.065,
        borderRadius: 20,
    },
    companyIcon: {
        marginRight: width * 0.051
    },
    buttonTextStyle: {
        fontFamily: 'AvenirNext-Regular',
    }
})

export default ContinueWithBtn;