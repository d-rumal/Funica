import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text, TextInput } from "react-native";
import { Pressable } from "@react-native-material/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
import PinInput from '../components/PinInput';
import SignBtn from '../components/SignBtn';
import { useTheme } from "@react-navigation/native";
AntDesign.loadFont().then()

const { height, width } = Dimensions.get('window');
const CreateNewPinScreen = ({ navigation }) => {

    const pin1 = useRef(null);
    const pin2 = useRef(null);
    const pin3 = useRef(null);
    const pin4 = useRef(null);
    const { colors } = useTheme();

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={styles.backBtnWithHeadingContainerStyle}>
                <Pressable
                    pressEffect="none"
                    style={({ pressed }) =>
                        pressed
                            ? { ...styles.backIcon, opacity: 0.5, }
                            : styles.backIcon}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <AntDesign name="arrowleft" size={25} color={colors.text} />
                </Pressable>
                <Text style={{ ...styles.backBtnWithHeadingTextStyle, color: colors.text }}>Create new Pin</Text>
            </View>
            <View style={{ height: height * 0.1 }} />
            <Text style={{ ...styles.headingTextStyle, color: colors.text }}>Add a pin number to make our account more secure.</Text>
            <View style={styles.pinContainer}>
                <PinInput id={1} ref={pin1} onChangeText={(value) => {
                    if (value === '') {
                    }
                    else {
                        pin2.current.focus()
                    }
                }} />
                <PinInput id={2} ref={pin2} onChangeText={(value) => {
                    if (value === '') {
                        pin1.current.focus()
                    }
                    else {
                        pin3.current.focus()
                    }
                }} />
                <PinInput id={3} ref={pin3} onChangeText={(value) => {
                    if (value === '') {
                        pin2.current.focus()
                    }
                    else {
                        pin4.current.focus()
                    }
                }} />
                <PinInput id={4} ref={pin4} onChangeText={(value) => {
                    if (value === '') {
                        pin3.current.focus();
                    }
                }} />
            </View>
            <View style={{}}>
                <SignBtn title={"Continue"} onPress={() => navigation.push('Tabs')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    headingTextStyle: {
        fontFamily: 'AlbertSans-Medium',
        textAlign: 'center',
        width: width * 0.8,
        fontSize: 14
    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: height * 0.1
    }
});

export default CreateNewPinScreen;