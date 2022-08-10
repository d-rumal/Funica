import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LogoSvg from '../svgs/LogoSvg';
import { Pressable, Text } from "@react-native-material/core";
import SignBtn from '../components/SignBtn';
import DividerWithText from '../components/DividerWithText';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthInputCard from '../components/AuthInputCard';
import { useTheme } from "@react-navigation/native";

Icon.loadFont().then()
const { height, width } = Dimensions.get('window')

const RegisterScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Pressable
                pressEffect="none"
                style={({ pressed }) =>
                    pressed
                        ? { ...styles.backIcon, opacity: 0.5 }
                        : styles.backIcon}
                onPress={() => {
                    navigation.navigate('Index')
                }}
            >
                <Icon name="arrowleft" size={25} color={colors.text} />
            </Pressable>
            <View style={styles.LogoSvgStyle}>
                <LogoSvg height={`${height * 0.2}`} width={`${width * 0.8}`} />
            </View>
            <Text variant="h4" style={{ ...styles.headingStyle, color: colors.text }}>
                Create your Account
            </Text>

            <AuthInputCard icon={'mail'} title={'Email'} />
            <AuthInputCard icon={'lock'} title={'Password'} />
            <SignBtn title={'Sign up'} isDisabled={false} onPress={() => {
                navigation.push('Fill')
            }}
            />


            <View style={{ height: height * 0.055 }} />
            <DividerWithText text={'or continue with'} />
            <View style={styles.continueWith}>
                <View style={{ ...styles.continueWithBtn, backgroundColor: colors.componentBackground, borderColor: colors.background }}>
                    <Icon name="facebook-square" size={25} color={colors.text} />
                </View>
                <View style={{ ...styles.continueWithBtn, backgroundColor: colors.componentBackground, borderColor: colors.background }}>
                    <Icon name="apple1" size={25} color={colors.text} />
                </View>
                <View style={{ ...styles.continueWithBtn, backgroundColor: colors.componentBackground, borderColor: colors.background }}>
                    <Icon name="google" size={25} color={colors.text} />
                </View>
            </View>
            <View style={styles.askForSignUp}>
                <Text style={{ fontFamily: 'AlbertSans-Regular', color: colors.text }}>Already have an account?</Text>
                <Pressable
                    pressEffect="none"
                    onPress={() => {
                        navigation.push('Login')
                    }}
                >
                    <Text style={{ fontFamily: 'AlbertSans-Regular', fontWeight: '700', color: colors.text }}> Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    headingStyle: {
        fontFamily: 'AlbertSans-Regular',
        fontWeight: '600',
        marginVertical: height * 0.01
    },
    LogoSvgStyle: {
        marginTop: height * 0.01
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginTop: height * 0.06,
        marginLeft: width * 0.05
    },
    dividerStyle: {
        width: width * 0.90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: height * 0.023
    },
    hairline: {
        backgroundColor: '#d7d0d0',
        height: 1,
        width: width * 0.75 / 2
    },
    orText: {
        fontFamily: 'AlbertSans-Medium',
        fontSize: 14,
        paddingHorizontal: 5,
        alignSelf: 'center',
    },
    askForSignUp: {
        flexDirection: 'row',
        margin: height * 0.0355
    },
    continueWith: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width,
        marginTop: 20,
    },
    continueWithBtn: {
        borderWidth: StyleSheet.hairlineWidth,
        padding: height * 0.0236,
        borderRadius: 15
    }

})

export default RegisterScreen;