import { Pressable } from "@react-native-material/core";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont()

const { height, width } = Dimensions.get('window')
const DatePickerText = () => {
    const [date, setDate] = useState('');
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const { colors } = useTheme();
    return (
        <>
            <Pressable
                pressEffect="none"
                style={{ ...styles.datePickerContainer, backgroundColor: colors.componentBackground }}
                onPress={() => {
                    setOpenDatePicker(true)
                }}
            >
                <View style={styles.dateInputPicker}>
                    <TextInput
                        clearTextOnFocus
                        placeholderTextColor="#878787"
                        editable={false}
                        placeholder="Date of Birth"
                        value={`${date}`}
                        style={{ color: colors.text }}
                    />
                </View>
                <AntDesign
                    style={
                        (date !== '')
                            ?
                            {
                                marginRight: width * 0.051
                            }
                            : {
                                marginRight: width * 0.051,
                                color: '#878787'
                            }
                    }
                    name="calendar"
                    size={20}
                    color={colors.text}
                />
            </Pressable>
            <DatePicker
                mode='date'
                modal
                date={new Date()}
                open={openDatePicker}
                onConfirm={(date) => {
                    setOpenDatePicker(false)
                    setDate(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
                }}
                onCancel={() => {
                    setOpenDatePicker(false)
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    datePickerContainer: {
        borderRadius: 20,
        width: width * 0.85,
        height: height * 0.065,
        flexDirection: 'row',
        backgroundColor: '#e7e7e7',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: height * 0.0118
    },
    dateInputPicker: {
        fontSize: 14,
        color: '#000',
        padding: height * 0.0177,
        fontFamily: 'AlbertSans-Medium',
    }
})

export default DatePickerText;