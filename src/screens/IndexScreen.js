import React, { useContext } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import IndexSvg from '../svgs/IndexSvg';
import { Pressable, Text } from "@react-native-material/core";
import ContinueWithBtn from '../components/ContinueWithBtn';
import SignBtn from '../components/SignBtn';
import DividerWithText from '../components/DividerWithText';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";

Icon.loadFont().then()
const { height, width } = Dimensions.get('window')


const IndexScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Pressable
                pressEffect="none"
                style={({ pressed }) =>
                    pressed
                        ? { ...styles.backIcon, opacity: 0.5 }
                        : styles.backIcon
                }
                onPress={() => {
                    navigation.navigate('Index')
                }}
            >
                <Icon name="arrowleft" size={25} color={colors.text} />
            </Pressable>
            <View style={styles.indexSvgStyle}>
                <IndexSvg height={`${height * 0.3}`} width={`${width * 0.8}`} />
            </View>
            <Text color={colors.text} variant="h3" style={styles.headingStyle}>
                Let's you in
            </Text>
            <ContinueWithBtn name={'google'} title={'Continue with Google'} onPress={() => { }} />
            <ContinueWithBtn name={'facebook-square'} title={'Continue with Facebook'} onPress={() => { }} />
            <ContinueWithBtn name={'apple1'} title={'Continue with Apple'} onPress={() => { }} />
            <View style={{ height: 10 }} />
            <DividerWithText text={'or'} />
            <SignBtn title={'Sign In with password'} onPress={() => {
                navigation.navigate('Login')
            }} isDisabled={false} />
            <View style={styles.askForSignUp}>
                <Text style={{ fontFamily: 'AlbertSans-Regular', color: colors.text }}>Don't have an account?</Text>
                <Pressable
                    pressEffect="none"
                    onPress={() => {
                        navigation.push('RegisterStack')
                    }}
                >
                    <Text style={{ fontFamily: 'AlbertSans-Regular', fontWeight: '700', color: colors.text }}> Sign Up</Text>
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    headingStyle: {
        fontFamily: 'AlbertSans-Regular',
        fontWeight: '600',
        marginVertical: height * 0.01
    },
    indexSvgStyle: {
        marginTop: height * 0.01
    },
    backIcon: {
        // color: colors.text,
        alignSelf: 'flex-start',
        marginTop: height * 0.06,
        marginLeft: width * 0.05
    },
    askForSignUp: {
        flexDirection: 'row',
        margin: height * 0.0355
    }
})

export default IndexScreen;