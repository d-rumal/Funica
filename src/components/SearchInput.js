import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont()
const { height, width } = Dimensions.get('window')
const SearchInput = ({ title }) => {
    const [term, setTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { colors } = useTheme();
    return (
        <View style={
            !isFocused
                ? { ...styles.searchInputContainer, backgroundColor: colors.componentBackground }
                : {
                    ...styles.searchInputContainer,
                    borderWidth: 1.5,
                    borderColor: colors.border,
                    backgroundColor: colors.componentBackground,
                }
        }>
            <AntDesign name="search1" size={25}
                color={colors.text}
                style={{ marginLeft: 20 }}
            />
            <TextInput
                clearTextOnFocus
                style={{ ...styles.searchInputStyle, color: colors.text }}
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
    searchInputContainer: {
        borderRadius: 20,
        width: width * 0.85,
        height: height * 0.065,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height * 0.0118
    },
    searchInputStyle: {
        width: '90%',
        height: '100%',
        fontSize: 14,
        padding: height * 0.0177,
        color: '#000',
        fontFamily: 'AlbertSans-Medium',
    }
})

export default SearchInput;