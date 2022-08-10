import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pressable } from "@react-native-material/core";


const HeadingBtn = (props) => {
    return (
        <Pressable
            pressEffect="none"
            style={
                props.focused
                    ? { ...styles.container, ...styles.isFocused }
                    : { ...styles.container, ...styles.notFocused }
            }
            {...props}
        >
            <Text style={
                props.focused
                    ? { ...styles.text, ...styles.isFocusedText }
                    : { ...styles.text, ...styles.notFocusedText }
            }>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 7
    },
    isFocused: {
        borderWidth: 2,
        backgroundColor: 'black',
    },
    notFocused: {
        borderWidth: 2,
    },
    text: {
        fontFamily: 'AlbertSans-Medium',
        fontSize: 16
    },
    isFocusedText: {
        color: 'white'
    },
    notFocusedText: {
        color: 'black'
    }

})

export default HeadingBtn;