import React, { useState } from "react";
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Pressable, Text, Avatar } from "@react-native-material/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import DataInput from '../components/DataInput';
import DatePickerText from '../components/DatePickerText';
import SignBtn from '../components/SignBtn';
import DropDown from '../components/DropDown';
import { useTheme } from "@react-navigation/native";

AntDesign.loadFont().then()
MaterialCommunityIcons.loadFont().then()

const { height, width } = Dimensions.get('window')
console.log(height, width)
const RegisterScreen = ({ navigation }) => {

    const [image, setImage] = useState(`https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg`)
    const { colors } = useTheme();


    const pickImage = async () => {

        try {
            const result = await ImagePicker.openPicker({
                includeBase64: true,
                cropping: true
            })
            setImage(`data:image/gif;base64,${result.data}`);
        }
        catch (e) { console.log(e) }
    }


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
                <Text style={{ ...styles.backBtnWithHeadingTextStyle, color: colors.text }}>Fill your profile</Text>
            </View>
            <View style={styles.avatarStyle}>
                <Pressable
                    pressEffect="none"
                    onPress={pickImage}
                >
                    <Avatar
                        size={height * 0.15}
                        image={{ uri: image }}
                    />
                </Pressable>
                <View style={styles.editIconStyle}>
                    <MaterialCommunityIcons
                        color={'white'}
                        name="account-edit"
                        size={30}
                    />
                </View>
            </View>
            <DataInput title={'Full Name'} />
            <DataInput title={'Nick Name'} />
            <DatePickerText />
            <DropDown list={['Male', 'Female', 'Non-Binary', 'Custom']} />
            <SignBtn title={"Continue"} onPress={() => navigation.push('Pin')} />
        </View>
    )
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
    avatarStyle: {
        marginVertical: height * 0.0355,
    },
    editIconStyle: {
        backgroundColor: '#000',
        borderRadius: 10,
        position: 'absolute',
        top: '75%',
        left: '25%'
    },
})

export default RegisterScreen;