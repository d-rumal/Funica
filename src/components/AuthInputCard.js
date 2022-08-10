import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TextInput, Animated } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then()


const { height, width } = Dimensions.get('window')
const AuthInputCard = ({ icon, title }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [term, setTerm] = useState('');
    const [isValid, setIsValid] = useState(true);
    const { colors } = useTheme();


    let isPassword;
    (title === 'Password' ? isPassword = true : isPassword = false)

    return (
        <View style={
            isValid ? (
                !isFocused
                    ? { ...styles.textFieldContainer, backgroundColor: colors.componentBackground }
                    : {
                        ...styles.textFieldContainer,
                        backgroundColor: colors.componentBackground,
                        borderWidth: 1.5,
                        borderColor: '#d7d0d0'
                    }
            )
                : (
                    !isFocused
                        ? styles.textFieldContainer
                        : {
                            ...styles.textFieldContainer,
                            borderWidth: 1.5,
                            borderColor: '#ff5252'
                        }
                )

        }>
            <View style={{ paddingLeft: 18 }}>
                <Icon name={`${icon}`} size={17} color={"#000"} />
            </View>
            <TextInput
                clearTextOnFocus
                style={{ ...styles.textFieldStyle, color: colors.text }}
                placeholderTextColor="#878787"
                placeholder={`${title}`}
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={true}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onEndEditing={() => {
                    setIsFocused(false)
                }}
                value={term}
                onChangeText={(value) => setTerm(value)}
                secureTextEntry={isPassword}
                onChange={({ nativeEvent }) => {
                    if (!isPassword) {
                        if (!nativeEvent.text.includes('@')
                            || !nativeEvent.text.includes('.')
                            || nativeEvent.text[nativeEvent.text.length - 1] === '.') {
                            setIsValid(false)
                        }
                        else {
                            setIsValid(true)
                        }
                    }
                    else {
                        if (nativeEvent.text.length < 6) {
                            setIsValid(false)
                        }
                        else {
                            setIsValid(true)
                        }
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textFieldStyle: {
        width: '90%',
        height: '100%',
        fontSize: 14,
        padding: height * 0.0177,
        fontFamily: 'AlbertSans-Medium',
    },
    textFieldContainer: {
        borderRadius: 20,
        width: width * 0.85,
        height: height * 0.065,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height * 0.0118
    }
})

export default AuthInputCard;