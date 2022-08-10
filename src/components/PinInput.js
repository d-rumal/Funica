import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const PinInput = React.forwardRef(({ id, onChangeText }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { colors } = useTheme();
    return (
        <View style={
            !isFocused
                ? { ...styles.pinStyleContainer, backgroundColor: colors.componentBackground }
                : {
                    ...styles.pinStyleContainer,
                    backgroundColor: colors.componentBackground,
                    borderWidth: 1.5,
                    borderColor: colors.border
                }
        }>
            <TextInput
                key={id}
                ref={ref}
                // ---------------------------------------------------------------- //
                caretHidden
                maxLength={1}
                style={styles.pinInputStyle}
                placeholderTextColor="#878787"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                keyboardType="number-pad"
                returnKeyType="go"
                // ---------------------------------------------------------------- //

                blurOnSubmit
                onChangeText={onChangeText}
                onFocus={() => {
                    setIsFocused(true)
                }}
                onChange={() => {
                    setIsFocused(false)
                }}
                onBlur={() => {
                    setIsFocused(false)
                }}
            />
        </View>
    );
})

const styles = StyleSheet.create({
    pinStyleContainer: {
        borderRadius: 20,
        width: width * 0.17,
        height: height * 0.065,
        flexDirection: 'row',
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
        margin: height * 0.008
    },
    pinInputStyle: {
        alignSelf: 'center',
        width: width * 0.17,
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
        fontFamily: 'AlbertSans-Medium',
    }
})

export default PinInput;