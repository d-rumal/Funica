import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')
const DataInput = ({ title }) => {
    const [term, setTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { colors } = useTheme();
    return (
        <View style={
            !isFocused
                ? { ...styles.dataInputContainer, backgroundColor: colors.componentBackground }
                : {
                    ...styles.dataInputContainer,
                    borderWidth: 1.5,
                    borderColor: colors.border,
                    backgroundColor: colors.componentBackground
                }
        }>
            <TextInput
                clearTextOnFocus
                style={{ ...styles.dataInputStyle, color: colors.text }}
                placeholderTextColor="#878787"
                placeholder={`${title}`}
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={true}
                value={term}
                onChangeText={(value) => setTerm(value)}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onEndEditing={() => {
                    setIsFocused(false)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dataInputContainer: {
        borderRadius: 20,
        width: width * 0.85,
        height: height * 0.065,
        flexDirection: 'row',
        backgroundColor: '#e7e7e7',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height * 0.0118
    },
    dataInputStyle: {
        width: '90%',
        height: '100%',
        fontSize: 14,
        padding: height * 0.0177,
        color: '#000',
        fontFamily: 'AlbertSans-Medium',
    }
})

export default DataInput;