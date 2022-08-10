import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Pressable, Text } from "@react-native-material/core";
import { useTheme } from "@react-navigation/native";
const { height, width } = Dimensions.get('window')

const SignBtn = ({ title, onPress, isDisabled }) => {
    const { colors } = useTheme();
    return (
        <Pressable
            disabled={isDisabled}
            pressEffect="none"
            style={({ pressed }) =>
                pressed
                    ? { opacity: 0.9 }
                    : {}}
            onPress={onPress}
        >
            <View style={{
                ...styles.continueWith, backgroundColor: colors.text, shadowColor: '#0e0e0e'
            }}>
                <Text adjustsFontSizeToFit style={{ ...styles.buttonTextStyle, color: colors.background }}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    continueWith: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.015,
        width: width * 0.85,
        height: height * 0.06,
        borderRadius: 25,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3
    },
    buttonTextStyle: {
        fontFamily: 'AvenirNext-Regular',
        color: '#fff',
        fontWeight: '600',
    }
})

export default SignBtn;