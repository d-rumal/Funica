import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, Modal, FlatList } from 'react-native';
import { Pressable } from "@react-native-material/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";
AntDesign.loadFont()

const { height, width } = Dimensions.get('window')

const DropDown = ({ list }) => {

    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const { colors } = useTheme();

    return (
        <>
            <Modal
                transparent={true}
                animationType="fade"
                visible={dropdownVisible}
                onRequestClose={() => {
                    setDropdownVisible(false)
                }}

            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} >
                    <Pressable pressEffect="none" style={{ flex: 2 }}
                        onPress={() => { setDropdownVisible(false) }}
                    />
                    <View style={{ ...styles.modalContainerStyle, backgroundColor: colors.background }} >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <Pressable
                                pressEffect="none"
                                onPress={() => {
                                    setDropdownVisible(false)
                                }}
                            >
                                <AntDesign name="close" size={25}
                                    style={{
                                        margin: height * 0.027
                                    }}
                                    color={colors.text}
                                />
                            </Pressable>
                            <Text style={{
                                marginVertical: height * 0.027,
                                fontFamily: 'AlbertSans-Bold',
                                fontSize: 20,
                                color: colors.text,
                            }}
                            >Select Gender</Text>
                            <Pressable
                                pressEffect="none"
                                onPress={() => {
                                    setConfirm(true)
                                    setDropdownVisible(false)
                                }}
                            >
                                <AntDesign name="check" size={25}
                                    style={{
                                        margin: height * 0.027
                                    }}
                                    color={colors.text}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.options}>
                            <View style={{ ...styles.optionsContainer, backgroundColor: colors.componentBackground }}>
                                <Pressable
                                    pressEffect="none"
                                    onPress={() => {
                                        if (male) { setMale(false) } else { setMale(true) }
                                        if (female) { setFemale(false) }
                                    }}
                                >
                                    <View style={
                                        male ? {
                                            borderColor: colors.background,
                                            borderWidth: 2,
                                            borderRadius: 4,
                                            backgroundColor: colors.text

                                        } :
                                            {
                                                borderColor: colors.background,
                                                borderWidth: 2,
                                                borderRadius: 4,
                                                backgroundColor: colors.background,
                                                height: 20,
                                                width: 20

                                            }

                                    }>
                                        {male ? <AntDesign name="check" size={16} color={colors.background} /> : null}
                                    </View>
                                </Pressable>
                                <Text style={{ color: colors.text }}>Male</Text>
                            </View>
                            <View style={{ ...styles.optionsContainer, backgroundColor: colors.componentBackground }}>
                                <Pressable
                                    pressEffect="none"
                                    onPress={() => {
                                        if (female) { setFemale(false) } else { setFemale(true) }
                                        if (male) { setMale(false) }
                                    }}
                                >
                                    <View style={
                                        female ? {
                                            borderColor: colors.background,
                                            borderWidth: 2,
                                            borderRadius: 4,
                                            backgroundColor: colors.text

                                        } :
                                            {
                                                borderColor: colors.background,
                                                borderWidth: 2,
                                                borderRadius: 4,
                                                backgroundColor: colors.background,
                                                height: 20,
                                                width: 20

                                            }

                                    }>
                                        {female ? <AntDesign name="check" size={16} color={colors.background} /> : null}
                                    </View>
                                </Pressable>
                                <Text style={{ color: colors.text }}>Female</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable pressEffect="none" style={{ ...styles.dropdownContainer, backgroundColor: colors.componentBackground }}
                onPress={() => {
                    setDropdownVisible(true)
                    setConfirm(false)
                }}
            >
                <Text style={{ ...styles.dropdownTextStyle, color: colors.text }}>{confirm ? (male ? "Male" : (female ? "Female" : 'Gender')) : 'Gender'}</Text>
                <AntDesign name={'caretdown'} size={10} style={{ marginRight: width * 0.065 }} color={colors.text} />
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    dropdownContainer: {
        borderRadius: 20,
        width: width * 0.85,
        height: height * 0.065,
        flexDirection: 'row',
        backgroundColor: '#e7e7e7',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height * 0.0118,
    },
    dropdownTextStyle: {
        fontSize: 14,
        padding: height * 0.0177,
        color: '#000',
        fontFamily: 'AlbertSans-Medium',
    },
    modalContainerStyle: {
        flex: 0.7,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: height * 0.03,
        alignItems: 'center'
    },
    options: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        justifyContent: 'space-evenly'
    },
    optionsContainer: {
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#e7e7e7',
        alignSelf: 'center',
        justifyContent: 'space-around',
        padding: 10,
        alignItems: 'center',
        width: '40%',
        height: '100%',
    }
})

export default DropDown;